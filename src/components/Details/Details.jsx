import React from 'react'
import {Card, CardHeader, CardContent, Typography} from "@material-ui/core"
import {Doughnut} from 'react-chartjs-2'
import { makeStyles,} from "@material-ui/core/styles";
import useTransactions from "../../useTransactions"


const useStyles =makeStyles((theme)=>({
    income:{
        borderBottom:"10px solid rgba(0,255,0,0.5)"
    },
    expense:{
        borderBottom:"10px solid rgba(255,0,0,0.5)"

    }
}))

const Details = ({title}) => {
    const {total, chartData}=useTransactions(title)
    const classes=useStyles()
    return (
       <Card className={ title === "Income" ? classes.income:classes.expense} style={{textAlign: "center"}}>
           <CardHeader title={title} style={{paddingBottom:"0"}} />
           <CardContent>
               <Typography variant="h5"><span style={{color:title==="Expense"?"#f55b5f":"#14915f"}}> ${total}</span></Typography>
               <Doughnut data={chartData}/>
           </CardContent>
       </Card>
    )
}

export default Details
