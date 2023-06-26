import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './nearbyjobcard.style'
import { checkImageURL } from '../../../../utils';

const NearbyJobCard = ({job, handleNavigate}) => {
  return (
    <TouchableOpacity style = {styles.container} onPress = {handleNavigate}>
        <TouchableOpacity
        style = {styles.logoContainer}>
          <Image
            source = {{uri: (job.employer_logo === null)
            ? 'https://images.vexels.com/media/users/3/131160/isolated/preview/8f6e09e823feb3f2a12e7bcaf2c5366d-job-magnifier-icon.png'
            : job.employer_logo }}
            resizeMode='contain'
            style={styles.logoImage}
          />
        </TouchableOpacity>
    <View style = {styles.textContainer}>
      <Text style={styles.jobName} numberOfLines={2}>
        {job?.job_title}
      </Text>
      <Text style = {styles.jobType}>{job?.job_employment_type} - {job?.job_city}, {job?.job_state}</Text>
    </View>
    
    </TouchableOpacity>
  );
};

export default NearbyJobCard