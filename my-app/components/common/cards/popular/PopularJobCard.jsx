import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils';

const PopularJobCard = ({ item, selectedJob, handleCardPress}) => {
  return (
    <TouchableOpacity
      style = {styles.container(selectedJob, item)}
      onPress = {() => handleCardPress(item)}
      >
        <TouchableOpacity
        style = {styles.logoContainer(selectedJob, item)}>
          <Image
            source = {{uri: (item.employer_logo === null)
            ? 'https://images.vexels.com/media/users/3/131160/isolated/preview/8f6e09e823feb3f2a12e7bcaf2c5366d-job-magnifier-icon.png'
            : item.employer_logo }}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </TouchableOpacity>
        <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
    <View style = {styles.infoContainer}>
      <Text style={styles.jobName(selectedJob, item)} numberOfLines={2}>
        {item.job_title}
      </Text>
      <Text style = {styles.location}>{item.job_city}, {item.job_state}</Text>
    </View>
    
    </TouchableOpacity>
  )
}

export default PopularJobCard