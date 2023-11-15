import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Grid,
    Button
} from '@mui/material';

let years = [];

for(let i=2000; i<2024; i++) {
    years.push(i);
}

const DialogSelectYear = (props) => {

    const {
        open,
        onSelectYearClose,
        onSelectYearClick
    } = props;

    return (
        <Dialog
            open={open}
            onClose={onSelectYearClose}
            PaperProps={{sx: { position: 'fixed', top: "120px", left: "32%" }}}
            maxWidth="xs"
            fullWidth
        >
            <DialogTitle  sx={{color: "#78849EB9"}} align="center">
                Select year
            </DialogTitle>
            <DialogContent>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                {
                    years.map((year, index) => {
                        return (
                            <Grid item key={index}>
                                <Button
                                    onClick={() => onSelectYearClick(year)}
                                    sx={{color: "black"}}
                                >
                                    {year}
                                </Button>
                            </Grid>
                        );
                    })
                }
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default DialogSelectYear;