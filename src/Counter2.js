import React,{Component} from 'react';
import './Score.css'
import Icon from './img/Tennis_ball/tennis_Ball.png'
import Counter1 from './Counter1';
import Counter from './Counter';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';



const number =["0","15","30","40","","","","","0","1","2","3","4","5","6","7","","Deuce","Adv.","","40","Adv."]
const number2 =["0","1","2","3","4","5","5","6","7"]
const number3 =[]
const number4 =[]
const number5 =[]




class Counter2 extends Component{
    constructor(props){
     super(props)
     this.state = {
        count: 0,
        count1: 0,
        game: 0,
        game1: 0,
        set: 0,
        set1: 0,
        showFlag: true,
        showFlag1: false
     };
    }
    selectCounter = () => {this.setState(()=>({Component: Counter}))};
      selectCounter1 = () => {this.setState({Component: Counter1})};
      selectCounter2 = () => {this.setState({Component: Counter2})};
    
      
    
      handleClickOpen = () => {
        this.setState({open : true});
      };
    
      handleClose = () => {
        this.setState({open : false});
      };
    
    incrementPlayer = () => {
        let next = this.state.count + 1
        let nextGame = this.state.game + 1
        let nextSet = this.state.set + 1
        let next1 = this.state.count1 + 1
        let nextGame1 = this.state.game1 + 1

        //ゲームセット
        if (next === 19　&& nextSet === 3 ){
            this.setState({ open1: true });
        }
        if (nextGame === 8 && nextGame1 === 8 && next === 19 && nextSet === 3 ){
            this.setState({ open1: true })
        }
        if (nextGame === 8 && nextGame1 === 8 && next === 15 && nextSet === 3 ){
            this.setState({ open1: true })
        }
        if (nextGame === 8 && nextGame1 === 6 && next === 4 && nextSet === 3 ){
            this.setState({ open1: true })
        }
        if (nextGame === 6 && next === 4 && nextGame1 < 4 && nextSet === 3 ) {
            this.setState({ open1: true })
        }

        //１ゲームごとにサーブ変更
        if(next === 4 ) {
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
            this.setState((flag)=>({showFlag: !flag.showFlag}))
            }
        
        //タイブレークのサーブ権
        if(next > 7 && next < 20 && ( (this.state.count +this.state.count1) % 2 ) === 0 ) {
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
            this.setState((flag)=>({showFlag: !flag.showFlag}))
        }
        //前セットタイブレ後　次セット目開始　サーブはタイブレ1ポイント目リターンだった側から
        if (nextGame === 8 && nextGame1 === 8 && next === 9 && next1 === 9){
            number4.unshift(this.state.showFlag)
        }
        if (nextGame === 8 && nextGame1 === 8 && (next === 19 || next === 15)){
            this.setState({showFlag1: number4[0]})
            this.setState({showFlag: !number4[0]})
        }

        //40-advから40-40に戻る
        if (next1 === 22 && next === 21) {
            next = 20
            this.setState({count1 : 20});
        }
        
        
        
        //アドバンテージ
        if (next === 4 && next1 === 4) {
            next = 21
            this.setState({count1 : 20});
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
            this.setState((flag)=>({showFlag: !flag.showFlag}))
        }
        //アドバンテージアゲイン以降でのゲーム
        if (next === 22) {
            next = 4
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
            this.setState((flag)=>({showFlag: !flag.showFlag}))
        }
        
        //5-5からは2セット先取か6-6タイブレまで続く
        if (nextGame1 === 6 && nextGame === 6 && next === 4) {
            nextGame1 = 6;
            nextGame = 7;
        }
        //タイブレーク　advからデュースに戻る
        if (next1 === 19 && next === 15) {
            next = 17
            this.setState({count1 : 17});
            
        }
        if (next1 === 19 && next === 18) {
            next = 17
            this.setState({count1 : 17});
        }
        //タイブレーク　アドバンテージアゲイン以降でのゲーム
        if (nextGame === 8 && nextGame1 === 8 && next === 19){
            this.setState({ set: nextSet });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next = 0
            this.setState({ count1: 0})
            number3.push (this.state.game,this.state.game1-1)
            number5.push ("-")
        }
        //タイブレーク 6-6以降　デュース
        if (next === 15 && next1 === 15) {
            
            next = 18
        }
        //タイブレーク advからポイントで1セット追加　スコアリセット
        if (next === 19){
            this.setState({ set: nextSet });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next = 0
            this.setState({ count1: 0})
            number3.push (this.state.game,this.state.game1-1)
            number5.push ("-")
        }
        //6-6でタイブレーク
        if (nextGame1 === 8 && nextGame === 6 && next === 4){
            nextGame1 = 8;
            this.setState({ game: 7 });
            this.setState({ count1: 8 });
            next = 8;            
        }
        //タイブレーク　7点先取で1セット追加　スコアリセット
        if (nextGame === 8 && nextGame1 === 8 && next === 15){
            this.setState({ set: nextSet });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next = 0;
            this.setState({ count1: 0});
            number3.push (this.state.game,this.state.game1-1)
            number5.push ("-")
            
        }
        //7-5で1セット追加でスコアリセット
        if (nextGame === 8 && nextGame1 === 6 && next === 4){
            this.setState({ set: nextSet });
            this.setState({ game1: 0 });
            nextGame = 0;
            number3.push (this.state.game,this.state.game1)
            number5.push ("-")
        }
        //セット終わりに相手のスコアをリセット
        if (nextGame === 6 && next === 4) {
            this.setState({ game1: 0 });
        }
        //1ゲームごとにポイントリセット
        if (next === 4) {
            this.setState({ count1: 0 });
        }
        //4点で1ゲーム追加
        if (next === 4) {
            this.setState({ game: nextGame })
        }
        //6ゲームで1セット　セット終わりにゲームカウントとポイントリセット  ゲームカウント表示   
        if (nextGame === 6 && next === 4 ) {
            this.setState({ game: 0 });
            this.setState({ set: nextSet });
            number3.push (this.state.game+1,this.state.game1)
            number5.push ("-")
        }
        
        //4点でポイントリセット        
        if (next === 4) {
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

        //ゲームセット
        if (next1 === 19　&& nextSet1 === 3 ){
            this.setState({ open1: true });
        }
        if (nextGame === 8 && nextGame1 === 8 && next1 === 19 && nextSet1 === 3 ){
            this.setState({ open1: true })
        }
        if (nextGame === 8 && nextGame1 === 8 && next1 === 15 && nextSet1 === 3 ){
            this.setState({ open1: true })
        }
        if (nextGame1 === 8 && nextGame === 6 && next1 === 4 && nextSet1 === 3){
            this.setState({ open1: true })
        }
        if (nextGame1 === 6 && next1 === 4 && nextGame < 4  &&  nextSet1 === 3 ) {
            this.setState({ open1: true })
        }

        //１ゲームごとにサーブ変更
        if(next1 === 4 ) {
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
            this.setState((flag)=>({showFlag: !flag.showFlag}))
            }
        
        //タイブレークのサーブ権
        if(next1 > 5 && next1 < 21 && ( (this.state.count +this.state.count1) % 2 ) === 0 ) {
            this.setState((flag)=>({showFlag: !flag.showFlag}))
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
        }
        //前セットタイブレ後　次セット目開始　サーブはタイブレ1ポイント目リターンだった側から
        if (nextGame === 8 && nextGame1 === 8 && next === 9 && next1 === 9){
            number4.unshift(this.state.showFlag)
        }
        if (nextGame === 8 && nextGame1 === 8 && (next1 === 19 || next1 === 15)){
            this.setState({showFlag1: number4[0]})
            this.setState({showFlag: !number4[0]})
        }

        //40-advから40-40に戻る
        if (next === 22 && next1 === 21) {
            next1 = 20
            this.setState({count : 20});
        }
        
        
        //アドバンテージ
        if (next === 4 && next1 === 4) {
            next1 = 21
            this.setState({count : 20});
            this.setState((flag)=>({showFlag: !flag.showFlag}))
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
        }
        //アドバンテージアゲイン以降でのゲーム
        if (next1 === 22) {
            next1 = 4
            this.setState((flag)=>({showFlag: !flag.showFlag}))
            this.setState((flag)=>({showFlag1: !flag.showFlag1}))
        }
        
        
        //5-5からは2セット先取か6-6タイブレまで続く
        if (nextGame1 === 6 && nextGame === 6 && next1 === 4) {
            nextGame = 6
            nextGame1 = 7
        }
        //タイブレーク　advからデュースに戻る
        if (next === 19 && next1 === 15) {
            next1 = 17
            this.setState({count : 17});
            
        }
        if (next === 19 && next1 === 18) {
            next1 = 17
            this.setState({count : 17});
        }
        //タイブレーク　アドバンテージアゲイン以降でのゲーム
        if (nextGame === 8 && nextGame1 === 8 && next1 === 19){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next1 = 0
            this.setState({ count: 0})
            number3.push (this.state.game-1,this.state.game1)
            number5.push ("-")
        }
        //タイブレーク 6-6以降　デュース
        if (next === 15 && next1 === 15) {
            
            next1 = 18
        }
        //タイブレーク advからポイントで1セット追加　スコアリセット
        if (next1 === 19 && next === 15){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next1 = 0
            this.setState({ count: 0})
            number3.push (this.state.game-1,this.state.game1)
            number5.push ("-")
        }
        //6-6でタイブレーク
        if (nextGame === 8 && nextGame1 === 6 && next1 === 4){
            nextGame = 8;
            this.setState({ game1: 7 });
            this.setState({ count: 8 });
            next1 = 8;
        }
        //タイブレーク　7点先取で1セット追加　スコアリセット
        if (nextGame === 8 && nextGame1 === 8 && next1 === 15 && next < 14){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            this.setState({ game1: 0 });
            next1 = 0
            this.setState({ count: 0})
            number3.push (this.state.game-1,this.state.game1)
            number5.push ("-")
        }
        //7-5で1セット追加でスコアリセット
        if (nextGame1 === 8 && nextGame === 6 && next1 === 4){
            this.setState({ set1: nextSet1 });
            this.setState({ game: 0 });
            nextGame1 = 0;
            number3.push (this.state.game,this.state.game1)
            number5.push ("-")
        }
        //セット終わりに相手のスコアをリセット
        if (nextGame1 === 6 && next1 === 4) {
            this.setState({ game: 0 });
        }
        //1ゲームごとにリセット
        if (next1 === 4) {
            this.setState({ count: 0 });
        }
        //4点で1ゲーム
        if (next1 === 4) {
            this.setState({ game1: nextGame1 })
        }
        
        //6ゲームで1セット　セット終わりにリセット
        if (nextGame1 === 6 && next1 === 4 ) {
            this.setState({ game1: 0 });
            this.setState({ set1: nextSet1 });
            number3.push (this.state.game,this.state.game1+1)
            number5.push ("-")
        }
        
        //4点でポイントリセット
        if (next1 === 4) {
            next1 = 0
        }
        
        this.setState({ count1: next1 })
        
        

    };
    reset = () =>{
      this.setState({ count: 0})
      this.setState({ count1: 0})
      this.setState({ set: 0})
      this.setState({ set1: 0})
      this.setState({ game: 0})
      this.setState({ game1: 0})
      this.setState({showFlag: true})
      this.setState({showFlag1: false})
      number3.splice(0,100)
      number4.splice(0,100)
      this.setState({ open1: false})
    }
    
 render(){
        return (
            <div>
                <Dialog
                 open={this.state.open1}
                 onClose={this.handleClose}
                 aria-labelledby="alert-dialog-title"
                 aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                  <div>{"Game Set"}</div>
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                <div className="center">{number3[0]}{number5[0]}{number3[1]} {number3[2]}{number5[1]}{number3[3]} {number3[4]}{number5[2]}{number3[5]} {number3[6]}{number5[3]}{number3[7]} {number3[8]}{number5[4]}{number3[9]}</div>
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={this.reset} color="primary" variant="contained">
                 Close
                </Button>
                </DialogActions>
                </Dialog>
                
                
                <table>
                 <tr>
                  <th>Player</th>
                  <th>Set</th>
                  <th>Game</th>
                  <th>Point</th>
                 </tr>
                <tr>
                 <td >1<img src={Icon}  alt="アイコン"  height={ 20 } width={ 20 } style={{ display: this.state.showFlag ? '' : 'none' }}/></td>
                 <td>{this.state.set}</td>
                 <td>{number3[0]} {number3[2]} {number3[4]} {number3[6]} {number3[8]} {number2[this.state.game]}</td>
                 <td>{number[this.state.count]}</td>
                 <td><button href="#" className="btn-stitch" onClick={this.incrementPlayer} >scored</button></td>
                </tr>
                <tr>
                 <td >2<img src={Icon}  alt="アイコン"  height={ 20 } width={ 20 } style={{ display: this.state.showFlag1 ? '' : 'none' }}/></td>
                 <td>{this.state.set1}</td>
                 <td>{number3[1]} {number3[3]} {number3[5]} {number3[7]} {number3[9]} {number2[this.state.game1]}</td>
                 <td>{number[this.state.count1]}</td>
                 <td><button href="#" className="btn-stitch" onClick={this.incrementPlayer1}>scored</button></td>
                </tr>
               </table>
               <button href="#" className="btn-flat-double-border" onClick={this.reset}>Reset</button>
               
            </div>
        )
    }
}

export default Counter2;