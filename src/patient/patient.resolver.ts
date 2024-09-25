import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PatientService } from './patient.service';
import { Patient } from './patient.model';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private readonly patientService: PatientService) {}

  // Query to get all patients
  @Query(() => [Patient])
  getAllPatients() {
    return this.patientService.getAllPatients();
  }

  // Query to get a patient by ID
  @Query(() => Patient, { nullable: true })
  getPatientById(@Args('id') id: string) {
    return this.patientService.getPatientById(id);
  }

  // Mutation to create a new patient
  @Mutation(() => Patient)
  createPatient(
    @Args('firstName') firstName: string,
    @Args('lastName') lastName: string,
    @Args('gender') gender: string,
    @Args('dob') dob: Date,
    @Args('phone') phone: string,
    @Args('email') email: string,
  ) {
    return this.patientService.createPatient(firstName, lastName, gender, dob, phone, email);
  }

  // Mutation to update a patient
  @Mutation(() => Patient, { nullable: true })
  updatePatient(
    @Args('id') id: string,
    @Args('firstName', { nullable: true }) firstName?: string,
    @Args('lastName', { nullable: true }) lastName?: string,
    @Args('gender', { nullable: true }) gender?: string,
    @Args('dob', { nullable: true }) dob?: Date,
    @Args('phone', { nullable: true }) phone?: string,
    @Args('email', { nullable: true }) email?: string,
  ) {
    const updatedData = { firstName, lastName, gender, dob, phone, email };
    return this.patientService.updatePatient(id, updatedData);
  }

  // Mutation to delete a patient
  @Mutation(() => Boolean)
  deletePatient(@Args('id') id: string) {
    return this.patientService.deletePatient(id);
  }
}
