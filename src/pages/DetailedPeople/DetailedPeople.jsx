import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Avatar from '@mui/material/Avatar';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const DetailedPeople = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={4}
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                    >
                        <p>All</p>
                        <p>Handed in</p>
                        <p>Returned</p>
                        <p>Missing</p>
                    </Grid>
                    <Grid item xs={8}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Avatar>H</Avatar>
                            <h1>Harshal</h1>
                            <PersonAddAlt1Icon />
                        </Grid>
                        <hr class="solid" />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default DetailedPeople;