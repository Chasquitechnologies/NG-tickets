import { Injectable } from '@angular/core';
import { Brand } from '../models/Brand';
import { Store } from '../models/Store';
import { Family } from '../models/Family';
import { EquipmentClassification } from '../models/EquipmentClassification';
import { EquipmentDetail } from '../models/EquipmentDetail';
import { FailureType } from '../models/FailureType';
import { Observable } from 'rxjs/Observable';
import { IDAO } from '../DAOLayer/IDAO';

@Injectable()
export class NewTicketServiceService {

  selectedBrand: Brand;
  selectedStore: Store;
  selectedClassification: EquipmentClassification;
  selectedFamily: Family;
  selectedEquipment: EquipmentDetail;
  selectedFailureType: FailureType;
  comment: Comment;

  constructor(private DAO: IDAO) {


  }

  // Get Brand options for dropdown
  public getBrandDropdownOptions(): Observable<Brand[]> {
    // Somehow we should pass the UserId to make sure we only get brands that the user is responsible for
    return this.DAO.getBrandDropdownOptions();
  }

  // Get Store options for dropdown based on selected brand
  public getStoreDropdownOptions(brandId: number): Observable<Store[]> {
    // Somehow we should pass the UserId to make sure we only get brands that the user is responsible for
    return this.DAO.getStoreDropdownOptions(brandId);
  }

  // Get classification options for dropdown
  public getClassificationDropdownOptions(): Observable<EquipmentClassification[]> {

    return this.DAO.getClassificationOptions();
  }

  // Get Family options for dropdown based on selected store and Classification
  public getFamilyDropdownOptions(storeId:number,classificationId:number): Observable<Family[]> {

    return this.DAO.getFamilyDropdownOptions(storeId, classificationId);
  }

  // Get Family options for dropdown based on selected Store, Classification and Family
  public getEquipmentDropdownOptions(storeId:number, classificationId:number, familyId:number): Observable<EquipmentDetail[]> {

    return this.DAO.getEquipmentDropdownOptions(storeId, classificationId, familyId);
  }

  public getFailureTypeDropdownOptions(): Observable<FailureType[]> {

    return this.DAO.getFailureTypeDropdownOptions();
  }

}
