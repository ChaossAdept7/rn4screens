/**
 * Created by serj on 6/26/17.
 */
import React, {Component} from 'react'
import { TouchableHighlight, View, Text, StyleSheet, TextInput, Button, ListView} from 'react-native'
import {fetchData} from './../../actions';
import { connect } from 'react-redux'
import {Bar} from './../Bar'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#404040',
    },
})

const renderRowData=(FetchedData)=>{
    return (
        <View style={styles.container}>
            <TouchableHighlight underlayColor="red">
                <Text style={styles.item}>{FetchedData.title}</Text>
            </TouchableHighlight>
        </View>)
}

class DisplayData extends Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
        this.state = {
            dataSource: ds.cloneWithRows([]),
            dataPresent:false
        };
    }

    componentWillMount(){
        /* if data is not present we want to fetch data */
        if(!this.state.dataPresent){
            this.props.fetchData();
        }
    }

    componentWillReceiveProps(nextProps){

        let {data, dataFetched} = nextProps.appData;
        /* init ListView if data fetched */
        if(dataFetched){
            /* rowHasChanged - re-render condition */
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title !== r2.title});
            this.setState({
                dataSource: ds.cloneWithRows(data),
                dataPresent:true
            });
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        let {dataFetched, isFetching} = this.props.appData;

        return (<View style={{flex:1}} >
            <Bar header="StackOverflow" navigate={navigate} />
            <View style={{flex:1}}>
                {
                    (isFetching)?<Text>Loading</Text>:null
                }
                {
                    dataFetched ? (
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={renderRowData}
                            renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
                            enableEmptySections={true}
                        />
                    ) : null
                }
            </View>
        </View>);
    }
}

function mapStateToProps (state) {
    return {
        appData: state.appData
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DisplayData);