import React from "react";
import axios from "axios";

import { TextField, Box, Grid, Toolbar, Tooltip, Typography } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';

import Header from './Header';

const { apikey } = require('./env.json');

var colors = 'darkGreen darkGreen green goldenRod darkGoldenRod indianRed fireBrick fireBrick fireBrick fireBrick fireBrick'.split(' ');
const useStyles = theme => {
    var root = { padding: theme.spacing(3) };
    colors.forEach(color => {
        root['& .' + color] = { backgroundColor: color };
    })
    return { root: root };
};

// api functions
const url = 'https://www.omdbapi.com/';

function search(s) {
    const params = { apikey, s };
    return axios.get(url, { params })
        .then(x => x.data.Search || []);
}

function getShow(i) {
    const params = { apikey, i };
    return axios.get(url, { params })
        .then(x => x.data || []);
}

function getSeason(i, Season) {
    const params = { apikey, i, Season };
    return axios.get(url, { params });
}

function getAll(imdbID, totalSeasons) {
    var requests = [];
    for (var i = 0; i < totalSeasons; i++){
        requests.push(
            getSeason(imdbID, i + 1)
        );
    }
    return axios.all(requests)
        .then(axios.spread( (...responses) => (
            responses.map(response => response.data) 
        )));
}

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            rows: [],
            show: {},
            seasons: [],
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    setText = text => {
        console.log(text);
        this.setState({ text });
    };
    
    // hooks

    onChange(event) { 
        event.preventDefault();     // prevents page from reloading on submit
        const text = event.target.value;
        console.log(text);
        this.setState({ text });
    }

    onSubmit(event) { 
        event.preventDefault();     // prevents page from reloading on submit
        search(this.state.text)
            .then(x => {
                this.setState({ rows: x });
            });
    }
    
    handleSelect(imdbID) {
        getShow(imdbID)
            .then(x => {
                this.setState({ show: x });

                getAll(
                    this.state.show.imdbID,
                    Number(this.state.show.totalSeasons),
                )
                    .then(x => {
                        this.setState({ seasons: x });
                    });
            });        
    }

    // components

    ImageGridList() {
        if (this.state.rows.length) {
            return (
                <Grid container justify='left' spacing={2}>
                    {this.state.rows
                        .filter(tile => tile.Poster !== 'N/A')
                        .map((tile) => (
                            <Grid item onClick={() => this.handleSelect(tile.imdbID)}>
                                <img src={tile.Poster} alt={tile.Title} width={144} />
                            </Grid>
                        )
                    )}
                </Grid>
            );
        }
        
        <Box component="div" display="inline">inline</Box>
        return this.state.rows
            .map((tile) => (
                <Box component="div" display="inline">
                    <img src={tile.Poster} alt={tile.Title} width={99} />
                </Box>
            ));
    }
    
    process() {
        var seasons = this.state.seasons;
        if (!seasons.length){
            return false;
        }
    
        var rows = []
        var numbers = [];
        seasons.forEach(season => {
            var row = {};
            const episodes = season.Episodes || [];
            episodes.forEach(episode => {
                row[episode.Episode] = episode.imdbRating
            });
            rows.push(row);
    
            numbers.push(
                Math.max( ...Object.keys(row).map(Number) )
            );
        })
        
        var max = Math.max( ...numbers );
        var columns = [{ 
            field: 'id',
            headerName: 'Season',
        }]
        for (var i = 1; i < max + 1; i++){
            columns.push({
                field: i,
                headerName: 'E' + i,
            });
        }
        
        rows.forEach((row, index) => row['id'] = index + 1);
    
        return {
            rows: rows,
            columns: columns,
        };
    }

    RatingsMap() {
        const data = this.process();
        if (!data){
            return <div></div>;
        }
        
        const { classes } = this.props;
        const { seasons } = this.state;
        const rows = seasons.map( (season, id) => {
            var row = { id };
            season.Episodes.forEach(episode => {
                row[episode.Episode] = episode;
            });
            return row;
        });
        console.log(rows);

        const epNumbers = rows.map(row => Object.keys(row));
        const temp = Array.prototype.concat(...epNumbers);
        const max = Math.max(...temp
            .filter(n => n !== 'id')
            .map(n => parseInt(n)));

        const renderCell = params => (            
            <Tooltip title={(
                <Typography component='pre'>
                    {JSON.stringify(params.value, null, 4)}
                </Typography>
            )}>
                <Typography>
                    {params.value ? params.value.imdbRating : null}
                </Typography>
            </Tooltip>
        );
        var columns = [{ 
            field: 'id',
            headerName: 'Season',
        }]
        for (var i = 0; i < max; i++){
            columns.push({ field: i + 1, renderCell });
        }
        console.log(columns)

        return (
            <DataGrid 
                rows={rows}
                columns={columns}
                // {...data}
                autoHeight
                className={classes.root}
                getCellClassName={(params) => {
                    if (params.field !== 'id'){
                        return colors[10 - parseInt(params.value ? params.value.imdbRating : null)];
                    }
                }}
            />
        );
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header
                    text={this.state.text}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <Toolbar />

                <div className={classes.root}>

                    {this.ImageGridList()}
                    <br />

                    {this.RatingsMap()}
                </div>
            </div>
            
        );
    }
} // end CommentForm component

export default withStyles(useStyles)(CommentForm);