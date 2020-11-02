import React,{Component} from 'react';

const number =["0","15","30","40","","Adv.","40","adv","0","1","2","3","4","5","6","7","","Deuce","Adv."]
const number2 =["0","1","2","3","4","5","5","6","7"]



class Counter extends Component{
    constructor(props){
     super(props)
     this.state = {
        count: 0,
        count1: 0,
        game: 0,
        game1: 0,
        set: 0,
        set1: 0
     };
    }
    
    
    incrementPlayer = () => {
        let next = this.state.count + 1
        let nextGame = this.state.game + 1
        let nextSet = this.state.set + 1
        let next1 = this.state.count1 + 1
        let nextGame1 = this.state.game1 + 1

        //40-advから40-40に戻る
        if (next1 == 6 && next == 4) {
            next = 6
        }
        if (next == 6 ) {
            this.setState({count1 : 6});
            next = 6;
        }
        //アドバンテージ
        if (next == 4 && next1 == 4) {
            next = 5
        }
        //アドバンテージアゲイン以降でのゲーム
        if (next == 8) {
            next = 4
        }
        //adv-40からポイントでゲーム
        if (next1 == 4 && next == 6 ) {
            next = 4
        }
        //5-5からは2セット先取か6-6タイブレまで続く
        if (nextGame1 == 6 && nextGame == 6 && next == 4) {
            nextGame1 = 6;
            nextGame = 7;
        }
        //タイブレーク　advからデュースに戻る
        if (next1 == 19 && next == 15) {
            next = 17
            this.setState({count1 : 17});
        }
        if (next1 == 19 && next == 18) {
            next = 17
            this.setState({count1 : 17});
        }
        //タイブレーク　アドバンテージアゲイン以降でのゲーム
        if (nextGame == 8 && nextGame1 == 8 && next == 19){
            this.setState({ set: nextSet });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next = 0
            this.setState({ count1: 0})
        }
        //タイブレーク 6-6以降　デュース
        if (next == 15 && next1 == 15) {
            next = 18
        }
        //タイブレーク advからポイントで1セット追加　スコアリセット
        if (next == 19){
            this.setState({ set: nextSet });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next = 0
            this.setState({ count1: 0})
        }
        //6-6でタイブレーク
        if (nextGame1 == 8 && nextGame == 6 && next == 4){
            nextGame1 = 8;
            this.setState({ game: 7 });
            this.setState({ count1: 8 });
            next = 8;
        }
        //タイブレーク　7点先取で1セット追加　スコアリセット
        if (nextGame == 8 && nextGame1 == 8 && next == 15){
            this.setState({ set: nextSet });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next = 0;
            this.setState({ count1: 0});
        }
        //7-5で1セット追加でスコアリセット
        if (nextGame == 8 && nextGame1 == 6 && next == 4){
            this.setState({ set: nextSet });
            this.setState({ game1: 0 });
            nextGame = 0;
        }
        //セット終わりに相手のスコアをリセット
        if (nextGame == 6 && next == 4) {
            this.setState({ game1: 0 });
        }
        //1ゲームごとにポイントリセット
        if (next == 4) {
            this.setState({ count1: 0 });
        }
        //4点で1ゲーム追加
        if (next == 4) {
            this.setState({ game: nextGame })
        }
        //6ゲームで1セット　セット終わりにゲームカウントとポイントリセット       
        if (nextGame == 6 && next == 4 ) {
            this.setState({ game: 0 });
            this.setState({ set: nextSet });
        }
        
        //4点でポイントリセット        
        if (next == 4) {
            next = 0
        }
        
        
        
        this.setState({ count: next })
        
    };

    incrementPlayer1 = () => {
        let next = this.state.count + 1
        let next1 = this.state.count1 + 1
        let nextGame = this.state.game + 1
        let nextGame1 = this.state.game1 + 1
        let nextSet1 = this.state.set1 + 1

        

        //40-advから40-40に戻る
        if (next == 6 && next1 == 4) {
            next1 = 6
        }
        if (next1 == 6 ) {
            this.setState({count : 6});
            next1 = 6;
        }
        //アドバンテージ
        if (next == 4 && next1 == 4) {
            next1 = 5
        }
        //アドバンテージアゲイン以降でのゲーム
        if (next1 == 8) {
            next1 = 4
        }
        //adv-40からポイントでゲーム
        if (next == 4 && next1 == 6 ) {
            next1 = 4
        }
        
        //5-5からは2セット先取か6-6タイブレまで続く
        if (nextGame1 == 6 && nextGame == 6 && next1 == 4) {
            nextGame = 6
            nextGame1 = 7
        }
        //タイブレーク　advからデュースに戻る
        if (next == 19 && next1 == 15) {
            next1 = 17
            this.setState({count : 17});
        }
        if (next == 19 && next1 == 18) {
            next1 = 17
            this.setState({count : 17});
        }
        //タイブレーク　アドバンテージアゲイン以降でのゲーム
        if (nextGame == 8 && nextGame1 == 8 && next1 == 19){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next1 = 0
            this.setState({ count: 0})
        }
        //タイブレーク 6-6以降　デュース
        if (next == 15 && next1 == 15) {
            next1 = 18
        }
        //タイブレーク advからポイントで1セット追加　スコアリセット
        if (next1 == 19 && next == 15){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next1 = 0
            this.setState({ count: 0})
        }
        //6-6でタイブレーク
        if (nextGame == 8 && nextGame1 == 6 && next1 == 4){
            nextGame = 8;
            this.setState({ game1: 7 });
            this.setState({ count: 8 });
            next1 = 8;
        }
        //タイブレーク　7点先取で1セット追加　スコアリセット
        if (nextGame == 8 && nextGame1 == 8 && next1 == 15 && next < 14){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next1 = 0
            this.setState({ count: 0})
        }
        //7-5で1セット追加でスコアリセット
        if (nextGame1 == 8 && nextGame == 6 && next1 == 4){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            nextGame1 = 0;
        }
        //セット終わりに相手のスコアをリセット
        if (nextGame1 == 6 && next1 == 4) {
            this.setState({ game: 0 });
        }
        //1ゲームごとにリセット
        if (next1 == 4) {
            this.setState({ count: 0 });
        }
        //4点で1ゲーム
        if (next1 == 4) {
            this.setState({ game1: nextGame1 })
        }
        
        //6ゲームで1セット　セット終わりにリセット
        if (nextGame1 == 6 && next1 == 4 ) {
            this.setState({ game1: 0 });
            this.setState({ set1: nextSet1 });
        }
        
        //4点でポイントリセット
        if (next1 == 4) {
            next1 = 0
        }
        this.setState({ count1: next1 })
    };
    
 render(){
        return (
            <div>
                <p>Set: {this.state.set}</p>
                <p>Game: {number2[this.state.game]}</p>
                <p>Count: {number[this.state.count]}</p>
                <button onClick={this.incrementPlayer}>scored</button>
                <p>Set: {this.state.set1}</p>
                <p>Game: {number2[this.state.game1]}</p>
                <p>Count: {number[this.state.count1]}</p>
                <button onClick={this.incrementPlayer1}>scored</button>
            </div>
        )
    }
}

export default Counter;
