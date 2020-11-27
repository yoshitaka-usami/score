import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Score extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           open: true,
           
        };
        this.handleClose = this.handleClose.bind(this)
    }
    handleClose = () => {
        this.setOpen({open : false});
      };
    render(){
        const {Component} = this.state;
        if(Component) return <Component />;
      return (
        <div >
          <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Game Set"}</DialogTitle>
        
        <DialogActions>
          <Button onClick={this.handleClose} color="primary" variant="contained">
            Close
          </Button>
        </DialogActions>
       </Dialog>
        </div>
      )
    }
  }