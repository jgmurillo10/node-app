import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
class Error extends Component{
  state = {
    open: false,
  }
  render(){
    return (
      <div>
      <Dialog open={this.props.open} onRequestClose={this.props.handleRequestClose}>
        <DialogTitle>{this.props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {this.props.errorMessage}
            {/* Error uploading file. The file type is not supported. Try with *.csv or *.json files. */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleRequestClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    );
  };
};
export default Error;
