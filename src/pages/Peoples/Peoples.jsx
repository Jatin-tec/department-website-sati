import React from "react";
import "./style.css";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Grid } from "@material-ui/core";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const People = () => {

    const peoples = [
        {
            name: 'Harshal',
            profile: 'H'
        },
        {
            name: 'Jatin',
            profile: 'J'
        },
        {
            name: 'Himonshu',
            profile: 'H'
        },
    ]

    const userName = useSelector(state => state.auth.auth.profile.email)

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <h1>Teachers</h1>
                        <PersonAddAlt1Icon />
                    </Grid>
                    <hr class="solid" />
                    <Item elevation={1}>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Avatar>P</Avatar>
                            <p>{userName}</p>
                            <MoreVertIcon />
                        </Grid>
                    </Item>
                </div>
                <div>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <h1>Students</h1>
                        <PersonAddAlt1Icon />
                    </Grid>
                    <hr class="solid" />
                    {peoples.map((people, index) => {
                        return (
                            <>
                                <Item key={index} elevation={1}>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Avatar>{people.profile}</Avatar>
                                        <p>{people.name}</p>
                                        <MoreVertIcon />
                                    </Grid>
                                </Item>
                                <hr class="solid" />
                            </>
                        )
                    })}
                </div>
            </Container>
        </React.Fragment>
    );
}

export default People;