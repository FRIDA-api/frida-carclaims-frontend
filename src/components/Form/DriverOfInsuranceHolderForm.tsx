import React, { useState, useCallback, useMemo } from 'react';
import {
  Autocomplete,
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Field, Formik } from 'formik';
import {
  DamagedPlace,
  Decisions,
  Salutations,
  stackDirection,
  stackSpacing,
  TypesOfDamage,
} from '../../config';
import { CustomizedSelectForFormik } from '../CustomizedSelectForFormik';
import CarDamageImg from '../../assets/images/car-damage.png';
import {
  DriverOfInsuranceHolderFormState,
  InsuranceHolderFormState,
} from '../../types';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  rejectStyle,
  acceptStyle,
  focusedStyle,
  baseStyle,
} from '../HDIDropzone';
import DeleteIcon from '@mui/icons-material/Delete';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { on } from 'events';

export function DriverOfInsuranceHolderForm() {
  const navigate = useNavigate();
  const [isInsuranceHolder, setInsuranceHolder] = useState<boolean>(false);
  const [files, setFiles] = useState<(File & { path?: string })[]>([]);
  const [imgsURL, setImgsUrl] = useState<string[]>([]);
  const handleDecisionChange = useCallback(
    (e: React.SyntheticEvent<Element, Event>, checked: string) => {
      if (checked === 'Yes') setInsuranceHolder(true);
      else setInsuranceHolder(false);
    },
    []
  );

  const onDrop = useCallback((acceptedFiles: (File & { path?: string })[]) => {
    setFiles((old) => [...old, ...acceptedFiles]);
    setImgsUrl((old) => [...old, ...acceptedFiles.map((f) => f.path!)]);
  }, []);

  const deleteFile = (index: number) => {
    const copy: (File & { path?: string })[] = structuredClone(files);
    copy.splice(index, 1);
    setFiles(copy);
    setImgsUrl(copy.map((f) => f.path!));
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      accept: {
        'image/png': ['png'],
        'image/jpeg': ['jpeg'],
        'image/jpg': ['jpg'],
      },
    });

  const handlePrev = () => navigate('/insurance-holder-a');

  React.useEffect(() => {
    if (files.length > 0) {
      const promises = files.map((file, i) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onloadend = function (e) {
            resolve(reader.result as string);
          };
        });
      });
      Promise.all(promises).then((urls) => {
        setImgsUrl(urls);
      });
    }
  }, [files]);

  let initialState: DriverOfInsuranceHolderFormState = {};

  if (isInsuranceHolder) {
    const driverHolderString = sessionStorage.getItem('insurance-holder-a');
    if (driverHolderString) {
      const driverHolder: InsuranceHolderFormState =
        JSON.parse(driverHolderString);
      const {
        insuranceHolderSurName,
        insuranceHolderName,
        insuranceHolderPlace,
        insuranceHolderPostalCode,
        insuranceHolderTelephone,
        insuranceHolderStreet,
        insuranceHolderStreetNr,
        insuranceHolderSalutation,
      } = driverHolder;
      initialState = {
        ...initialState,
        driverHolderSurName: insuranceHolderSurName,
        driverSalutation: insuranceHolderSalutation as any,
        driverHolderName: insuranceHolderName,
        driverHolderStreet: insuranceHolderStreet,
        driverHolderStreetNr: insuranceHolderStreetNr,
        driverHolderPostalCode: insuranceHolderPostalCode,
        driverHolderPlace: insuranceHolderPlace,
        driverHolderTelephone: insuranceHolderTelephone,
      };
    }
  }

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  return (
    <Formik
      enableReinitialize
      initialValues={initialState}
      onSubmit={(values) => {
        const extendedValues = {
          ...values,
          files, // Save files
          imgsURL, // Save image URLs
        };
        const string = JSON.stringify(extendedValues);
        sessionStorage.setItem('driver-a', string);
        navigate('/injured');
      }}
    >
      {({
        errors,
        values,
        setFieldValue,
        setValues,
        handleChange,
        handleSubmit,
      }) => (
        <Grid item xs={12} id="driver-of-holder">
          <form onSubmit={handleSubmit}>
            <Typography variant="h6" className="mb-3">
              Angaben zum Fahrzeuglenker A (Verursacher)
            </Typography>
            <Grid item xs={12} className="mb-3">
              <Typography variant="body1">
                Ist der Versicherungsnehmer A auch der Fahrlenker gewesen?
              </Typography>
              <Field onChange={handleDecisionChange} component={RadioGroup}>
                {Decisions.map((dmg, i) => (
                  <FormControlLabel
                    value={dmg}
                    key={`isInsuranceHolder-${i}`}
                    control={<Radio />}
                    label={dmg === 'Yes' ? 'Ja' : 'Nein'}
                  />
                ))}
              </Field>
            </Grid>
            {!isInsuranceHolder && (
              <>
                <Grid item md={4} xs={12} className="mb-3">
                  <FormControl fullWidth>
                    <InputLabel>* Anrede</InputLabel>
                    <Field
                      name="driverSalutation"
                      values={values.driverSalutation}
                      component={CustomizedSelectForFormik}
                      defaultValue=""
                    >
                      {Salutations.map((sal, i) => (
                        <MenuItem key={`driverSalutations-${i}`} value={sal}>
                          {sal}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={8} className="mb-3">
                  <Stack direction={stackDirection} spacing={stackSpacing}>
                    <TextField
                      name="driverHolderName"
                      value={values.driverHolderName}
                      label="* Name"
                      onChange={handleChange}
                      fullWidth
                    />
                    <TextField
                      name="driverHolderSurName"
                      value={values.driverHolderSurName}
                      label="* Vorname"
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8} className="mb-3">
                  <Stack direction={stackDirection} spacing={stackSpacing}>
                    <TextField
                      name="driverHolderDriverLicense"
                      value={values.driverHolderDriverLicense}
                      label="Führerschein-Nr.:"
                      onChange={handleChange}
                      fullWidth
                    />
                    <TextField
                      name="driverHolderIssuer"
                      value={values.driverHolderIssuer}
                      label="Ausgestellt durch:"
                      helperText="Zulassungsbehörde"
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8} className="mb-3">
                  <Stack direction={stackDirection} spacing={stackSpacing}>
                    <TextField
                      name="driverHolderStreet"
                      value={values.driverHolderStreet}
                      onChange={handleChange}
                      label="* Straße"
                      fullWidth
                    />
                    <TextField
                      name="driverHolderStreetNr"
                      value={values.driverHolderStreetNr}
                      onChange={handleChange}
                      label="* Hausnummer"
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8} className="mb-3">
                  <Stack direction={stackDirection} spacing={stackSpacing}>
                    <TextField
                      name="driverHolderPostalCode"
                      value={values.driverHolderPostalCode}
                      label="* Postleitzahl"
                      onChange={handleChange}
                    />
                    <TextField
                      name="driverHolderPlace"
                      value={values.driverHolderPlace}
                      label="* Ort"
                      onChange={handleChange}
                      fullWidth
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={8} className="mb-3">
                  <Stack direction={stackDirection} spacing={stackSpacing}>
                    <TextField
                      type="tel"
                      name="driverHolderTelephone"
                      value={values.driverHolderTelephone}
                      onChange={handleChange}
                      label="Telefonnummer"
                      fullWidth
                      helperText="z.B.: 49/1767887954"
                    />
                  </Stack>
                </Grid>
              </>
            )}
            {isInsuranceHolder && (
              <>
                <Grid item xs={12} className="mb-3">
                  <Stack direction="column" spacing={stackSpacing}>
                    <b>Anrede: </b>{' '}
                    <p>
                      {values.driverSalutation === 'Herr' ? 'Herr' : 'Frau'}{' '}
                    </p>
                    <b>Nach- und Vorname: </b>
                    <p>
                      {values.driverHolderName}, {values.driverHolderSurName}
                    </p>
                    <b>Anschrift: </b>
                    <p>
                      {values.driverHolderStreet} {values.driverHolderStreetNr}{' '}
                      <br />
                      {values.driverHolderPostalCode} {values.driverHolderPlace}
                    </p>
                    <b>Kontaktdetails: </b>
                    <p>{values.driverHolderTelephone}</p>
                  </Stack>
                </Grid>
              </>
            )}
            <Grid item xs={12} className="mb-3">
              <Stack direction={stackDirection} spacing={stackSpacing}>
                <Autocomplete
                  multiple
                  id=""
                  options={DamagedPlace.map((option) => option.label)}
                  onChange={(event, value) =>
                    setFieldValue('driverHolderDamagePlace', value)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Markieren Sie die Stelle, wo der Unfall passiert ist"
                      placeholder="Unfallstellen"
                    />
                  )}
                />
                <Grid item xs={12} md={4}>
                  <img src={CarDamageImg} alt="Placeholder" width="100%" />
                  <Typography variant="body2">
                    * Markieren Sie die Stelle, wo der Unfall passiert ist
                  </Typography>
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8} className="mb-3">
              <TextField
                multiline
                fullWidth
                minRows={4}
                variant="outlined"
                placeholder="Sichtbare Schäden"
                value={values.driverHolderVisibleDamage}
                name="driverHolderVisibleDamage"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={8} className="mb-3">
              <TextField
                minRows={4}
                variant="outlined"
                multiline
                placeholder="Bemerkungen"
                value={values.driverHolderNotes}
                name="driverHolderNotes"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={12} lg={6} className="mb-3">
              <Grid item xs={12} className="img-attachment">
                <div
                  {...getRootProps({
                    className: 'dropzone',
                    style: style as any,
                  })}
                >
                  <input {...getInputProps()} />
                  <Stack direction="column">
                    <div className="text-center">
                      <AttachFileIcon />
                      <p>Bilder reinziehen oder auf Fläche klicken!</p>
                      <p>
                        Sie können auch nützliche Dokumente wie Führerschein und
                        Personalausweis hochladen.
                      </p>
                      <p>(akzeptierte Bildformate: JPG, JPEG, PNG)</p>
                    </div>
                  </Stack>
                </div>
                <div className="attached-images d-flex my-3">
                  {files?.map((file, i) => (
                    <div key={`attached-file-${i}`} className="mx-2">
                      <div className="d-flex flex-column jusitfy-content-center">
                        <img
                          src={imgsURL[i]}
                          height={100}
                          width="100"
                          style={{ objectFit: 'contain' }}
                          alt={`Uploaded attachment ${i + 1}`}
                          className="mx-auto"
                        />
                        <span className="d-flex justify-content-center my-1">
                          {file.path}
                        </span>
                        <Button
                          color="error"
                          variant="contained"
                          className="mt-2"
                          onClick={() => deleteFile(i)}
                        >
                          <DeleteIcon className="me-1" />
                          Löschen
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4} className="mb-3">
              <Typography variant="body2">
                * Ist das Fahrzeug vom Beschädigten fahrbereit?
              </Typography>
              <FormControl>
                <RadioGroup name="victimReadyToDrive" onChange={handleChange}>
                  {Decisions.map((dec, i) => (
                    <FormControlLabel
                      label={dec === 'Yes' ? 'Ja' : 'Nein'}
                      key={`victimReadyToDrive-${i}`}
                      value={dec}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="body2">
                Wie kam es zu dem Schaden am Fahrzeug der beschädigten Person?
              </Typography>
              <FormControl>
                <RadioGroup name="whichDamageToVictim" onChange={handleChange}>
                  {TypesOfDamage.map((dmg, i) => (
                    <FormControlLabel
                      label={dmg.label}
                      value={dmg.key}
                      key={`whichDamageToVictim-${i}`}
                      control={<Radio />}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <ButtonGroup>
                <Button color="error" variant="contained" onClick={handlePrev}>
                  Zurück
                </Button>
                <Button type="submit" variant="contained" color="primary">
                  Weiter
                </Button>
              </ButtonGroup>
            </Grid>
          </form>
        </Grid>
      )}
    </Formik>
  );
}
