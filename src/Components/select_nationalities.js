import React, { useEffect, useState, useCallback } from 'react';
//import { getNationalities } from '../services/books';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import i18n from '../i18n';
import { NATIONALITIES } from "../services/constants";

function SelectNationalities({
    onNationalityChange,
    nationality
}) {
    const [nationalities, setNationalities] = useState([]);

    const getNationalitiesList = useCallback(/* async */ () => {
        /* const response = await getNationalities();
        console.log({response})
        if(response) {
            setNationalities(response.data);
        } else {
        } */
        setNationalities(NATIONALITIES);
    }, [])

    useEffect(()=>{
        if (nationalities.length === 0) {
            getNationalitiesList();
        }
    }, [getNationalitiesList, nationalities.length])

    const getNationalitiesOptions = () => {
        return nationalities.map((nationality, index)=>{
            return (
                <MenuItem key={index} value={nationality.value}>
                    <Grid container>
                        {nationality.flag && (
                            <Grid item>
                                <img src={nationality.flag} alt={`Flag of ${nationality.name}`} width="20" height="13" />
                            </Grid>
                        )}
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