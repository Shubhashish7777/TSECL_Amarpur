import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Typography, Button, FormControl, FilledInput, InputAdornment, FormHelperText } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import * as XLSX from 'xlsx';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const BoldTypography = styled(Typography)({
  fontWeight: 'bold',
});

const RedInput = styled(FilledInput)({
  color: 'red',
});

const GreenInput = styled(FilledInput)({
  color: 'green',
});

export default function BasicGrid() {
  const [values, setValues] = useState({
    date132kv: null,
    incoming132kv: '',
    bazar: '',
    anaraibari: '',
    local: '',
    dalak: '',
    hospital: '',
    date66kv: null,
    incoming66kv: '',
    rangamati: '',
    kasko: '',
    emergency: '',
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setValues({ ...values, [id]: value });
  };

  const handleDateChange = (date, id) => {
    setValues({ ...values, [id]: date });
  };

  const generateExcel = () => {
    const data132KV = [
      ['Amarpur 132 KV SS', ''],
      ['Date & Time', values.date132kv ? values.date132kv.format('YYYY-MM-DD HH:mm:ss') : ''],
      ['Incoming', values.incoming132kv],
      ['Bazar', values.bazar],
      ['Anaraibari', values.anaraibari],
      ['Local', values.local],
      ['Dalak', values.dalak],
      ['Hospital', values.hospital],
    ];

    const data66KV = [
      ['Amarpur 66 KV SS', ''],
      ['Date & Time', values.date66kv ? values.date66kv.format('YYYY-MM-DD HH:mm:ss') : ''],
      ['Incoming', values.incoming66kv],
      ['Rangamati', values.rangamati],
      ['Kasko', values.kasko],
      ['Emergency', values.emergency],
    ];

    const workbook = XLSX.utils.book_new();

    const ws132KV = XLSX.utils.aoa_to_sheet(data132KV);
    const ws66KV = XLSX.utils.aoa_to_sheet(data66KV);

    XLSX.utils.book_append_sheet(workbook, ws132KV, '132KV SS');
    XLSX.utils.book_append_sheet(workbook, ws66KV, '66KV SS');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    saveAsExcelFile(excelBuffer, 'Amarpur_substation_data_'+new Date().toString()+'.xlsx');
  };

  const saveAsExcelFile = (buffer, fileName) => {
    const data = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName;
    link.click();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BoldTypography variant="h6">Amarpur 132 KV SS</BoldTypography>
          <Item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                  label="Date & Time for 132KV SS"
                  value={values.date132kv}
                  onChange={(date) => handleDateChange(date, 'date132kv')}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <RedInput
                id="incoming132kv"
                value={values.incoming132kv}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-incoming-helper-text"
                inputProps={{ 'aria-label': 'Incoming' }}
              />
              <FormHelperText id="filled-incoming-helper-text">Incoming</FormHelperText>
            </FormControl>
          </Item>
          {/* Repeat similar Item blocks for bazar, anaraibari, local, dalak, hospital */}
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="bazar"
                value={values.bazar}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-bazar-helper-text"
                inputProps={{ 'aria-label': 'Bazar' }}
              />
              <FormHelperText id="filled-bazar-helper-text">Bazar</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="anaraibari"
                value={values.anaraibari}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-anaraibari-helper-text"
                inputProps={{ 'aria-label': 'Anaraibari' }}
              />
              <FormHelperText id="filled-anaraibari-helper-text">Anaraibari</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="local"
                value={values.local}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-local-helper-text"
                inputProps={{ 'aria-label': 'Local' }}
              />
              <FormHelperText id="filled-local-helper-text">Local</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="dalak"
                value={values.dalak}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-dalak-helper-text"
                inputProps={{ 'aria-label': 'Dalak' }}
              />
              <FormHelperText id="filled-dalak-helper-text">Dalak</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="hospital"
                value={values.hospital}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-hospital-helper-text"
                inputProps={{ 'aria-label': 'Hospital' }}
              />
              <FormHelperText id="filled-hospital-helper-text">Hospital</FormHelperText>
            </FormControl>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <BoldTypography variant="h6">Amarpur 66 KV SS</BoldTypography>
          <Item>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                  label="Date & Time for 66KV SS"
                  value={values.date66kv}
                  onChange={(date) => handleDateChange(date, 'date66kv')}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <RedInput
                id="incoming66kv"
                value={values.incoming66kv}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-incoming2-helper-text"
                inputProps={{ 'aria-label': 'Incoming' }}
              />
              <FormHelperText id="filled-incoming2-helper-text">Incoming</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="rangamati"
                value={values.rangamati}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-rangamati-helper-text"
                inputProps={{ 'aria-label': 'Rangamati' }}
              />
              <FormHelperText id="filled-rangamati-helper-text">Rangamati</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="kasko"
                value={values.kasko}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-kasko-helper-text"
                inputProps={{ 'aria-label': 'Kasko' }}
              />
              <FormHelperText id="filled-kasko-helper-text">Kasko</FormHelperText>
            </FormControl>
          </Item>
          <Item>
            <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
              <GreenInput
                id="emergency"
                value={values.emergency}
                onChange={handleInputChange}
                endAdornment={<InputAdornment position="end">Amperes</InputAdornment>}
                aria-describedby="filled-emergency-helper-text"
                inputProps={{ 'aria-label': 'Emergency' }}
              />
              <FormHelperText id="filled-emergency-helper-text">Emergency</FormHelperText>
            </FormControl>
          </Item>
        </Grid>
      </Grid>

      <Button variant="contained" color="primary" style={{ marginTop: '20px', marginRight: '10px' }} onClick={generateExcel}>
        Generate and Download Excel
      </Button>
    </Box>
  );
}