import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Gravatar } from 'react-native-gravatar'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    render() {
        const name = this.props.name || 'Anonymous'
        const gravatar = this.props.email ?
            <Gravatar options={{ email: this.props.email, secure: true }}
                style={styles.avatar} />
            : null
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Social Up!</Text>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'Shelter',
        height: 34,
        fontSize: 32,
    }
})

export default Header


