import React from 'react';
import {Grid,Paper} from  '@material-ui/core';
import Right from './Right';
import Left from './Left';
const styles={
    Paper:{
        padding:20, 
        marginTop:10,
        marginBottom:10
    }
}

export default props =>
  <Grid container>
         <Grid item sm>
            <Left styles={styles}/>
         </Grid>
         <Grid item sm>
            <Right styles={styles}/>
         </Grid>
         
    </Grid>
  
