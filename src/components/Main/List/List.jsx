import React, {useContext} from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText,Avatar, ListItemSecondaryAction, IconButton, Slide } from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import { red, green } from '@material-ui/core/colors';
import {Delete, MoneyOff} from "@material-ui/icons"
import {ExpenseTrackerContext} from "../../../context/context"

const useStyles=makeStyles((theme)=>({
    avatarIncome: {
        color: '#faecec',
        backgroundColor: green[500],
      },
      avatarExpense: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
      },
      list: {
        maxHeight: '150px',
        overflow: 'auto',
      },

}))


const List = () => {
    const {transactions, deleteTransaction}=useContext(ExpenseTrackerContext)
   
    const classes =useStyles()
   
    return (
        <MUIList dense={false} className={classes.list} >
            {transactions.map((transaction)=>{
                return(
                    <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar className={transaction.type === "Income"? classes.avatarIncome:classes.avatarExpense}>
                                    <MoneyOff/>

                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={()=>deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                )
            })}
            
        </MUIList>
    )
}

export default List
