import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'; // for generating unique IDs
import { Patient } from './patient.model';

@Injectable()
export class PatientService {
  private patients: Patient[] = [];

  // Create a new patient
  createPatient(firstName: string, lastName: string, gender: string, dob: Date, phone: string, email: string): Patient {
    const patient: Patient = {
      id: uuid(),
      firstName,
      lastName,
      gender,
      dob,
      phone,
      email,
    };
    this.patients.push(patient);
    return patient;
  }

  // Retrieve all patients
  getAllPatients(): Patient[] {
    return this.patients;
  }

  // Retrieve a single patient by ID
  getPatientById(id: string): Patient {
    return this.patients.find((patient) => patient.id === id);
  }

  // Update a patient
  updatePatient(id: string, updatedData: Partial<Patient>): Patient {
    const patientIndex = this.patients.findIndex((patient) => patient.id === id);
    if (patientIndex > -1) {
      const updatedPatient = { ...this.patients[patientIndex], ...updatedData };
      this.patients[patientIndex] = updatedPatient;
      return updatedPatient;
    }
    return null;
  }

  // Delete a patient
  deletePatient(id: string): boolean {
    const patientIndex = this.patients.findIndex((patient) => patient.id === id);
    if (patientIndex > -1) {
      this.patients.splice(patientIndex, 1);
      return true;
    }
    return false;
  }
}
