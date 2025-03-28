import React from 'react';
import JSONPretty from 'react-json-pretty';
import { Button, Grid, Stack } from '@mui/material';
import arrowImage from './../../assets/images/arrow_forward.svg';
import { stackDirection } from '../../config';

export function ResultForm() {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '100%',
      boxSizing: 'border-box',
      overflowX: 'auto',
      // backgroundImage:
      // 'linear-gradient(190deg, rgb(20, 117, 115), rgb(25, 30, 40))',
    },
    column: {
      flex: '1 1 45%',
      maxWidth: '45%',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#f9f9f9',
      boxSizing: 'border-box',
      minWidth: '300px',
    },
    imageContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100px',
      height: '100%',
    },
    image: {
      maxWidth: '200px',
      maxHeight: '200px',
    },
    json: {
      whiteSpace: 'pre-wrap',
      wordWrap: 'break-word',
      backgroundColor: '#eaeaea',
      padding: '10px',
      borderRadius: '4px',
      fontSize: '14px',
      fontFamily: 'Courier New, Courier, monospace',
      maxWidth: '100%',
      overflowX: 'auto',
    },
    button: {
      marginTop: '10px',
      backgroundColor: '#333',
    },
    gradientBackground: {
      backgroundImage:
        'linear-gradient(190deg, rgb(20, 117, 115), rgb(25, 30, 40))',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
  };

  let sendRequest = sessionStorage.getItem('claimsdataRequest');
  const result = sessionStorage.getItem('claimsdataResult');

  let parsedRequest: Record<string, any> | null = null;
  let parsedResult: Record<string, any> | null = null;

  if (sendRequest) parsedRequest = JSON.parse(sendRequest);
  if (result) parsedResult = JSON.parse(result);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => console.log('JSON wurde in die Zwischenablage kopiert!'))
      .catch((err) => {
        console.error('Fehler beim Kopieren:', err);
        alert('Fehler beim Kopieren');
      });
  };

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <h2>Request</h2>
        <p>Validated against the "Open API Schema of Carclaims" and send towards "Stoplight"</p>
        <JSONPretty
          mainStyle="line-height:1.3;color:#66d9ef;background:#333;overflow:auto;padding:10px;rgb(204, 204, 204);border-radius: 4px"
          errorStyle="line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;"
          keyStyle="color:#f92672;"
          stringStyle="color:#fd971f;"
          valueStyle="color:#a6e22e;"
          booleanStyle="color:#ac81fe;"
          id="json-pretty"
          data={JSON.stringify(parsedRequest, null, 2)}
        />
        <Button
          style={styles.button}
          variant="contained"
          onClick={() =>
            copyToClipboard(
              parsedRequest ? JSON.stringify(parsedRequest, null, 2) : ''
            )
          }
        >
          JSON Kopieren
        </Button>
      </Grid>
      <Grid item xs={12} md={6} className="mb-3">
        <h2>Response</h2>
        <p>Response data from the "Stoplight Mock Service"</p>
        <JSONPretty
          mainStyle="line-height:1.3;color:#66d9ef;background:#333;overflow:auto;padding:10px;border-radius: 4px"
          errorStyle="line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;"
          keyStyle="color:#f92672;"
          stringStyle="color:#fd971f;"
          valueStyle="color:#a6e22e;"
          booleanStyle="color:#ac81fe;"
          id="json-pretty"
          data={JSON.stringify(parsedResult, null, 2)}
        />
        <Button
          style={styles.button}
          variant="contained"
          onClick={() =>
            copyToClipboard(
              parsedResult ? JSON.stringify(parsedResult, null, 2) : ''
            )
          }
        >
          JSON Kopieren
        </Button>
      </Grid>
    </Grid>
  );
}
