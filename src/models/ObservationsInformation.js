export class ObservationsInformation {
    constructor(
        organizationAlias,
        hospitalAlias,
        patient,
        observations,
        messageControlID,
        physicianAliases,
        physicianService,
        tempStoreDataMap
    ) {
        this.organizationAlias = organizationAlias;
        this.hospitalAlias = hospitalAlias;
        this.patient = patient;
        this.observations = observations;
        this.messageControlID = messageControlID;
        this.physicianAliases = physicianAliases;
        this.physicianService = physicianService;
        this.tempStoreDataMap = tempStoreDataMap;
    }
}
