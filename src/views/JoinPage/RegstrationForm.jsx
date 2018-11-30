import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';

function RegstrationForm() {
  const currencies = [
    {
      value: 'male',
      label: '남',
    },
    {
      value: 'female',
      label: '여',
    }
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>

      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nickName"
            name="nickName"
            label="닉네임"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        {/*<Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="addiress2"
            name="addiress2"
            label="Address line 2"
            fullWidth
            autoComplete="billing address-line2"
          />
        </Grid>*/}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            select
            name="city"
            label='성별'
            value='남'
            fullWidth
            autoComplete="billing address-level2">
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label='지역'
            fullWidth
            autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="생년월일(1980-11-11)" fullWidth/>
        </Grid>
        {/*<Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="billing postal-code"
          />
        </Grid>*/}
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="성별"
            fullWidth
            autoComplete="billing country"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
            label="이용약관에 동의합니다."
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default RegstrationForm;