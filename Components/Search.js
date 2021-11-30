import React, { Component } from "react";
import { StyleSheet, View, Button, TextInput, FlatList, Text } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmsItems'
import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'

class Search extends React.Component {
    constructor(props) {
        super(props)
        this._films =[]
    }



   _loadFilms(){
        getFilmsFromApiWithSearchedText("star").then(data => {
            this._films = data.results
            this.forceUpdate()
        });
   }
   
    render(){
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textInput} placeholder="Titre du film"/>
                <Button title="Rechercher" onPress= {() => this._loadFilms() }/>
                <FlatList
                  data = {this._films}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 20,
        flex: 1

    },
    textInput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})
export default Search