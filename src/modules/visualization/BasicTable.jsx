import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});
function BasicTable(props) {
  const { classes } = props;
  const maxData = 20;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {props.attributes.map(n=>{
              return(
                <TableCell>{n.name}</TableCell>
              )
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((n,i) => {
            console.log(maxData,' ',i);
            if ( i > maxData ) return;
            else{
              return (
                <TableRow key={n[props.id]}>
                  {
                    props.attributes.map((k,i)=>{

                      return(
                        <TableCell>{n[k.name]}</TableCell>
                      )
                    })
                  }
                </TableRow>
              );
            }

          })}

        </TableBody>
      </Table>
    </Paper>
  );
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);
