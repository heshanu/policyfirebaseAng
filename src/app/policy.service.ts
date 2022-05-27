import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Policy } from './policy.model';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private firestore:AngularFirestore) {}

  getPolicies(){
    return this.firestore.collection('policies').snapshotChanges();
  }

  createPolicy(policy:Policy){
    return this.firestore.collection('policies').add(policy);
  }

  updatePolicy(policy:Policy){
    return this.firestore.doc('policies/'+policy.id).update(policy);
  }

  deletePolicy(policyId:Policy){
    return this.firestore.doc('policies/'+policyId).delete();
  }

}
