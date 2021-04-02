# API endpoints

## Vaersdata Endpoint

### GET /vaersdata

```
/vaersdata/
```

Vraagt alle data op uit de 2021vaersdata tabel, items worden per 10 terug gestuurd. Pagination is ingebouwd met argument. Pagina's beginnen vanaf 0

```
?page=x
```

#### **Voorbeeld**

```
http://example.com:3000/vaersdata/
curl -v http://example.com:3000/vaersdata/

http://example.com/vaersdata?page=2 // Geeft entries 20-30 
curl -v http://example.com:3000/vaersdata?page=2
```

### GET /vaersdata/:id

```
/vaersdata/:id
```

Vraagt de data m.b.t de desbetreffende ID op.

#### **Voorbeeld**

```
http://example.com:3000/vaersdata/2
curl -v http://example.com:3000/vaersdata/2
```

### POST /vaersdata/

```
/vaersdata/
```

Maakt een nieuwe VAERS entry aan

**Voorbeeld**

```
curl -d '{"VAERS_ID": "916710", "RECVDATE": "1/1/2021", "STATE": "CA", "AGE_YRS": "18", "CAGE_YRS": "18", "CAGE_MO": "18", "SEX": "F", "RPT_DATE": "1/2/2020", "SYMPTOM_TEXT": "Acute appendicitis, onset morning of 1/1/2021  (Reporting this because Pfizer covid vaccine had 3-4x higher risk of appendicitis, although data not reported for Moderna covid vaccine)", "DIED": null, "L_THREAT"": null, "ER_VISIT": "Y", "HOSPITAL": "Y", "HOSPDAYS": 3, "X_STAY": null, "DISABLE": null, "RECOVD": "U", "VAX_DATE": "12/29/2020", "ONSET_DATE": "1/1/2021", "NUMDAYS": 3, "LAB_DATE": "WBCs 13k, 4% Bands, CT with acute appendicitis- taken to surgery", "V_ADMINBY": "PVT", "V_FUNDBY": null, "OTHER_MEDS": "Synthroid", "CURR_ILL": null, "HISTORY": "Hypothyroidism", "PRIOR_VAX": null, "SPLTTYPE": null, "FORM_VERS": 2, "TODAYS_DATE": "01/01/2021", "BIRTH_DEFECT": null, "OFC_VISIT": null, "ER_ED_VISIT": null, "ALLERGIES": "NKDA"}' -H 'Content-Type: application/json' http://example.com:3000/vaersdata
```

### PUT /vaersdata/

```
/vaersdata/
```

Update Vaersdata Entry

**Voorbeeld**

```
curl -d '{"VAERS_ID": "916710", "RECVDATE": "1/1/2021", "STATE": "CA", "AGE_YRS": "18", "CAGE_YRS": "18", "CAGE_MO": "18", "SEX": "F", "RPT_DATE": "1/2/2020", "SYMPTOM_TEXT": "Acute appendicitis, onset morning of 1/1/2021  (Reporting this because Pfizer covid vaccine had 3-4x higher risk of appendicitis, although data not reported for Moderna covid vaccine)", "DIED": null, "L_THREAT"": null, "ER_VISIT": "Y", "HOSPITAL": "Y", "HOSPDAYS": 3, "X_STAY": null, "DISABLE": null, "RECOVD": "U", "VAX_DATE": "12/29/2020", "ONSET_DATE": "1/1/2021", "NUMDAYS": 3, "LAB_DATE": "WBCs 13k, 4% Bands, CT with acute appendicitis- taken to surgery", "V_ADMINBY": "PVT", "V_FUNDBY": null, "OTHER_MEDS": "Synthroid", "CURR_ILL": null, "HISTORY": "Hypothyroidism", "PRIOR_VAX": null, "SPLTTYPE": null, "FORM_VERS": 2, "TODAYS_DATE": "01/01/2021", "BIRTH_DEFECT": null, "OFC_VISIT": null, "ER_ED_VISIT": null, "ALLERGIES": "NKDA"}' -H 'Content-Type: application/json' -X PUT http://example.com:3000/vaersdata
```

### DELETE /vaersdata/:id

```
/vaersdata/:id
```

Delete Vaersdata Entry

**Voorbeeld**

```
curl -X DELETE http://example.com:3000/vaersdata/916710
```

## VaersSymptom Endpoint

### GET /vaerssymptoms

```
/vaerssymptoms/
```

Vraagt alle data op uit de 2021vaerssymptoms tabel, items worden per 10 terug gestuurd. Pagination is ingebouwd met argument. Pagina's beginnen vanaf 0

```
?page=x
```

#### **Voorbeeld**

```
http://example.com:3000/vaerssymptoms/
curl -v http://example.com:3000/vaerssymptoms/

http://example.com/vaerssymptoms?page=2 // Geeft entries 20-30 
curl -v http://example.com:3000/vaerssymptoms?page=2
```

### GET /vaerssymptoms/:id

```
/vaerssymptoms/:id
```

Vraagt de data m.b.t de desbetreffende ID op.

#### **Voorbeeld**

```
http://example.com:3000/vaerssymptoms/2
curl -v http://example.com:3000/vaerssymptoms/2
```

### POST /vaerssymptoms/

```
/vaerssymptoms/
```

Maakt een nieuwe VAERS Symptom entry aan

**Voorbeeld**

```
curl -d '{"VAERS_ID": "916710", "SYMPTOM": "Appendicitis", "SYMPTOMVERSION": 23.10'}' -H 'Content-Type: application/json' http://example.com:3000/vaerssymptoms
```

### PUT  /vaerssymptoms/

```
/vaerssymptoms/
```

Update VaersSymptom Entry

**Voorbeeld**

```
curl -d '{"VAERS_ID": "916710", "SYMPTOM": "Appendicitis", "SYMPTOMVERSION": 23.10'}' -H 'Content-Type: application/json' -X PUT http://example.com:3000/vaerssymptoms
```

### DELETE /vaerssymptoms/:id

```
/vaerssymptoms/:id
```

Delete Vaerssymptom Entries associated with VAERS_ID

**Voorbeeld**

```
curl -X DELETE http://example.com:3000/vaerssymptoms/916710
```

## Vaersvax Endpoint

### GET /vaersvax

```
/vaersvax/
```

Vraagt alle data op uit de 2021vaersvax tabel, items worden per 10 terug gestuurd. Pagination is ingebouwd met argument. Pagina's beginnen vanaf 0

```
?page=x
```

#### **Voorbeeld**

```
http://example.com:3000/vaersvax/
curl -v http://example.com:3000/vaersvax/

http://example.com/vaersvax?page=2 // Geeft entries 20-30 
curl -v http://example.com:3000/vaersvax?page=2
```

### GET /vaersvax/:id

```
/vaersvax/:id
```

Vraagt de data m.b.t de desbetreffende ID op.

#### **Voorbeeld**

```
http://example.com:3000/vaersvax/2
curl -v http://example.com:3000/vaersvax/2
```

### POST /vaersvax/

```
/vaersvax/
```

Maakt een nieuwe VAERS Vaccine entry aan

**Voorbeeld**

```
curl -d '{"VAX_TYPE": "COVID19", "VAERS_ID": "916710",  "VAX_LOT": null, "VAX_DOSE_SERIES": 1, "VAX_ROUTE": "IM", "VAX_SITE": "LA", "VAX_NAME": "COVID19 (COVID19 (MODERNA))", "VAX_MANU": "MODERNA"'}' -H 'Content-Type: application/json' http://example.com:3000/vaersvax
```

### PUT  /vaersvax/

```
/vaersvax/
```

Update Vaers vaccine Entry

**Voorbeeld**

```
curl -d '{"VAX_TYPE": "COVID19", "VAERS_ID": "916710",  "VAX_LOT": null, "VAX_DOSE_SERIES": 1, "VAX_ROUTE": "IM", "VAX_SITE": "LA", "VAX_NAME": "COVID19 (COVID19 (MODERNA))", "VAX_MANU": "MODERNA"'}' -H 'Content-Type: application/json' -X PUT http://example.com:3000/vaersvax
```

### DELETE /vaersvax/:id

```
/vaersvax/:id
```

Delete vaersvax entries associated with VAERS_ID

**Voorbeeld**

```
curl -X DELETE http://example.com:3000/vaersvax/916710
```

## Vaersall Endpoint

### GET /vaersall

```
/vaersall/
```

Vraagt alle data op uit alle 3 de tabellen, items worden per 10 terug gestuurd. Pagination is ingebouwd met argument. Pagina's beginnen vanaf 0

```
?page=x
```

#### **Voorbeeld**

```
http://example.com:3000/vaersall/
curl -v http://example.com:3000/vaersall/

http://example.com/vaersall?page=2 // Geeft entries 20-30 
curl -v http://example.com:3000/vaersall?page=2
```

### GET /vaersall/:id

```
/vaersall/:id
```

Vraagt alle data m.b.t de desbetreffende ID op.

#### **Voorbeeld**

```
http://example.com:3000/vaersall/2
curl -v http://example.com:3000/vaersall/2
```

### DELETE /vaersvax/:id

```
/vaersvax/:id
```

Delete all entries associated with VAERS_ID

**Voorbeeld**

```
curl -X DELETE http://example.com:3000/vaersvax/916710
```

