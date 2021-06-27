import React from 'react'
import{view,TouchableOpacity,text,StyleSheet} from "react-native"
export default class AppHeader extends React.component
{
 render()
  {
  return(
  <view>
  <TouchableOpacity style={styles.header}>
    <text style{style.text}>Phonics</text>
</TouchableOpacity>
</view>
)
  }
} 
  const.style sheet. create({
  header:{
    BackgroundColor:"maroon"
  },
    text:{
      aligncell:"center",
      fontFamily:" algerian",
      fontWeight:"bold",
      fontSize:20,
      margintTop:20,
    },
  })
