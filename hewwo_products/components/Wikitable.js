import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Linking} from 'react-native';
import { Table, TableWrapper, Row, Col } from 'react-native-table-component';
import { Feather } from '@expo/vector-icons';

export default class BelleTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Belle Delphine'],
            tableImg: [<Image source={require("../assets/BelleWiki2020.png")} style={styles.belleimg} />],
            tableData: ['Belle Img'],
            tableHead: ['Belle Delphine'],
            tableTitle: ['  Born', '  Other names'],
            tableData: [
                ['  Mary-Belle Kirschner', '\n  23 October 1999', '\n  (age 21)\n', <Text key="south" style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/South_Africa')}>  South Africa</Text>],
                ['  Bunny Delphine'],

            ],
            tableTitle2: ['  Occupation', '  Years active'],
            tableData2: [
                ['  Internet celebrity ·', '\n  pornographic actress ·', '\n  model  ·  Youtuber'],
                ['  2015-present']
            ],
            tableModelling: ['Modelling information'],
            tableModellingTitle: ['  Height', '  Hair colour', '  Eye colour'],
            tableModellingData: [
                ['  5 t 6 in (1.68m)'],
                ['  Brown'],
                ['  Hazel']
            ],
            tableYoutube: ['Youtube information'],
            tableYoutubeTitle: ['  Channel', '  Years active'],
            tableYoutubeData: [
                [ <Text key="yt"style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://www.youtube.com/channel/UCXvKUavCtDOlA8bT1i2tI3w')}>  belle delphine <Feather name="external-link" size={14} color="#fd63fe" /></Text>] ,
                ['  2016, 2018-present']
            ],
            tableYoutubeTitle2: ['  Genre', '  Subscribers', '  Total views'],
            tableYoutubeData2: [
                [<Text key="beauty" style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Beauty_YouTuber')}>  Beauty and makeup</Text>, ' ·\n', <Text key="mv" style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Music_video')}>  music</Text>, '  ·  ', <Text key="vlog" style={{ color: '#fd63fe' }} onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Vlog')}>vlog</Text> ],
                ['  1.95 million'],
                ['  46.8 million']
            ],
            tableUpdated: ['Updated: 10 February 2021']
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 0.8, borderColor: '#fd63fe' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.belletext} />
                    <Col data={state.tableImg} style={styles.img} />

                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle} style={styles.title} heightArr={[90]} textStyle={styles.titletext} />
                        <Col data={state.tableData} heightArr={[90]} textStyle={styles.text} />
                    </TableWrapper>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableTitle2} style={styles.title} heightArr={[70]} textStyle={styles.titletext} />
                        <Col data={state.tableData2} heightArr={[70]} textStyle={styles.text} />
                    </TableWrapper>

                    <Row data={state.tableModelling} style={styles.head2} textStyle={styles.headertext} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableModellingTitle} style={styles.title} heightArr={[25]} textStyle={styles.titletext} />
                        <Col data={state.tableModellingData} heightArr={[25]} textStyle={styles.text} />
                    </TableWrapper>
                    <Row data={state.tableYoutube} style={styles.head2} textStyle={styles.headertext} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableYoutubeTitle} style={styles.title} heightArr={[25]} textStyle={styles.titletext} />
                        <Col data={state.tableYoutubeData} heightArr={[25]} textStyle={styles.text} />
                    </TableWrapper>
                    <TableWrapper style={styles.wrapper}>
                        <Col data={state.tableYoutubeTitle2} style={styles.title} heightArr={[50]} textStyle={styles.titletext} />
                        <Col data={state.tableYoutubeData2} heightArr={[50]} textStyle={styles.text} />
                    </TableWrapper>
                    <Row data={state.tableUpdated} heightArr={[25]} textStyle={styles.updatedtext} />
                </Table>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, paddingTop: 20 },
    head: { height: 40, },
    head2: { height: 30, },
    belleimg: {width: 640/2.5, height: 436/2.5, alignSelf: 'center' },
    img: { height: 200 },
    wrapper: { flexDirection: 'row'},
    title: { flex: 1, },
    titletext: { fontWeight: 'bold', textAlign: 'left', color: '#2b2b24'},
    text: { textAlign: 'left', lineHeight: 20, color: '#2b2b24'},
    belletext: { fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: '#2b2b24' },
    headertext: { textAlign: 'center', fontWeight: 'bold', color: '#2b2b24' },
    updatedtext: { textAlign: 'center', lineHeight: 20, fontStyle: 'italic', color: '#2b2b24', paddingVertical: 5}
});