import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Counter from './Counter';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import  './Score.css'



class Selector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           showFlag: false
        };
      this.click = this.click.bind(this) 
    }
    
    
      
    
      handleClickOpen = () => {
        this.setState({showFlag2 : true});
      };
    
      handleClose = () => {
        this.setState((flag)=>({showFlag: !flag.showFlag}))
      };
      goTo = (index) => {
        return () => {
          
          this.setState({ viewIndex: index });
        }
      }; 
      click = () =>{
        this.goTo(0);
        this.handleClose();
      }
      
      



 render(){
   return(
      <div>
        <div style={{ display: this.state.showFlag ? '' : 'none' }}>
          <Button onClick={this.handleClose} href="#" class="btn-border-bottom">select</Button>
        </div>
        <div style={{ display: this.state.showFlag ? 'none' : '' }} className="em">{"the best of 「 」set match"}</div>
            <div className="button_wrapper">
              <Button onClick={ () => {const goToFunc = this.goTo(0);goToFunc();this.handleClose();}} style={{ display: this.state.showFlag ? 'none' : '' }} href="#" class="btn-circle-stitch">1</Button>
              <Button onClick={ () => {const goToFunc = this.goTo(1);goToFunc();this.handleClose();}} style={{ display: this.state.showFlag ? 'none' : '' }} href="#" class="btn-circle-stitch">3</Button>
              <Button onClick={ () => {const goToFunc = this.goTo(2);goToFunc();this.handleClose();}} style={{ display: this.state.showFlag ? 'none' : '' }} href="#" class="btn-circle-stitch">5</Button>
                {this.state.viewIndex === 0 && (
               <div style={{ display: this.state.showFlag ? '' : 'none' }}><Counter /></div>
                 )}
                 {this.state.viewIndex === 1 && (
               <div style={{ display: this.state.showFlag ? '' : 'none' }}><Counter1 /></div>
                 )}
                 {this.state.viewIndex === 2 && (
               <div style={{ display: this.state.showFlag ? '' : 'none' }}><Counter2 /></div>
                 )}
            </div> 

        
      </div>
     );
    }
}

export default Selector;