import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const renderRoleSpecificFields = () => {
    switch (selectedRole) {
      case 'consumer':
        return (
          <>
            <TextInput style={styles.input} placeholder="First Name" />
            <TextInput style={styles.input} placeholder="Last Name" />
            <TextInput style={styles.input} placeholder="CNIC" />
            <TextInput style={styles.input} placeholder="Phone Number" />
            <TextInput style={styles.input} placeholder="Address" />
            {/* Other consumer-specific fields */}
          </>
        );
      case 'clinic':
        return (
          <>
            <TextInput style={styles.input} placeholder="Clinic Name" />
            <TextInput style={styles.input} placeholder="Location" />
            <TextInput style={styles.input} placeholder="Specialization" />
            <TextInput style={styles.input} placeholder="Phone Number" />
            <TextInput style={styles.input} placeholder="Website" />
            {/* Other clinic-specific fields */}
          </>
        );
      case 'admin':
        return (
          <>
            {/* Admin-specific fields */}
            <TextInput style={styles.input} placeholder="Admin Field 1" />
            <TextInput style={styles.input} placeholder="Admin Field 2" />
            <TextInput style={styles.input} placeholder="Admin Field 3" />
            <TextInput style={styles.input} placeholder="Admin Field 4" />
            <TextInput style={styles.input} placeholder="Admin Field 5" />
          </>
        );
      case 'deliveryman':
        return (
          <>
            {/* Deliveryman-specific fields */}
            <TextInput style={styles.input} placeholder="Vehicle Type" />
            <TextInput style={styles.input} placeholder="License Plate" />
            <TextInput style={styles.input} placeholder="Contact Number" />
            <TextInput style={styles.input} placeholder="Experience" />
            <TextInput style={styles.input} placeholder="Availability" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign Up</Text>
      <Text style={styles.subtitle}>Choose your role:</Text>

      <View style={styles.roleButtons}>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => setSelectedRole('consumer')}
        >
          <Text style={styles.roleButtonText}>Consumer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => setSelectedRole('clinic')}
        >
          <Text style={styles.roleButtonText}>Clinic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => setSelectedRole('admin')}
        >
          <Text style={styles.roleButtonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleButton}
          onPress={() => setSelectedRole('deliveryman')}
        >
          <Text style={styles.roleButtonText}>Deliveryman</Text>
        </TouchableOpacity>
      </View>

      {selectedRole && renderRoleSpecificFields()}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already registered? <Text style={styles.loginLink}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontFamily: 'Holtwood One SC-Regular',
    fontSize: 36,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  roleButtons: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  roleButton: {
    backgroundColor: '#329998',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  roleButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#edeeef',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  signupButton: {
    backgroundColor: '#329998',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  signupButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    fontSize: 14,
  },
  loginLink: {
    color: '#329998',
    fontWeight: 'bold',
  },
});

export default SignupScreen;
