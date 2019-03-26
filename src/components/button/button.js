import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class Buttons extends Component{
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button variant="outlined" color="secondary" className={classes.button}>
        Create Account
        </Button>
      </div>
    )
  }
}


Buttons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Buttons);