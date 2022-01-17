export class Observations {
    constructor(
        alias,
        resultValue,
        inError,
        resultDateTime,
        aliasType,
        observationStatus
    ) {
        this.alias = alias;
        this.resultValue = resultValue;
        this.inError = inError;
        this.resultDateTime = resultDateTime;
        this.aliasType = aliasType;
        this.observationStatus = observationStatus;
    }
}
