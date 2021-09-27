import React, { useEffect, useState } from 'react';
import { getNationalities } from '../services/books';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import i18n from '../i18n';

function SelectNationalities({
    onNationalityChange,
    nationality
}) {
    const [nationalities, setNationalities] = useState([]);

    const getNationalitiesList = async () => {
        const response = await getNationalities();
        if(response) {
            setNationalities(response.data);
        }
    }

    useEffect(()=>{
        getNationalitiesList();
    }, [])

    const getNationalitiesOptions = () => {
        return nationalities.map((nationality, index)=>{
            return (
                <MenuItem key={index} value={nationality.name}>
                    <Grid container>
                        <Grid item>
                            <img src={nationality.flag} alt={`Flag of ${nationality.name}`} width="20" height="13" />
                        </Grid>
                        <Grid item style={{marginLeft: 10}}>
                            {nationality.name}
                        </Grid>
                    </Grid>
                </MenuItem>
            )
        })
    }

    return (
        <FormControl variant="outlined" style={{width: "100%"}}>
            <InputLabel id="nationality-label">{i18n.t("default:_NATIONALITY")}</InputLabel>
            <Select
                labelId="nationality-label"
                id="nationality-id"
                value={nationality}
                onChange={onNationalityChange}
                label={i18n.t("default:_NATIONALITY")}
            >
                {getNationalitiesOptions()}
            </Select>
        </FormControl>
    )
}

export default SelectNationalities;