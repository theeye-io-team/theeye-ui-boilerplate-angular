export interface Beneficiarios {
    id: string
    data: BeneficiarioData
  }

  interface S3Data {
    filename:string
    key:string
    progress:number
    uploaded:boolean
    url:string
  }

  export interface Documentos extends Desplegable {
    S3Data: S3Data
  }
  
  export interface Desplegable {
    value: string
    viewValue: string
  }

  export interface DesplegableEntidades extends Desplegable {
    cuit: string
    address: string
    cbu: string
  }

  export interface BeneficiarioData {
    identificacion: string
    nombre: string
    email: string
    cuit: string
    razon_social: string
    clasificacion: Desplegable
    condicion_iva:Desplegable
    pais: Desplegable
    provincia: Desplegable
    forma_pago:Desplegable
    hasAportes:boolean
    factura: {
      solicitar_factura: boolean,
      S3Data:S3Data
    }
    dates:{
      fecha_plazo:any, 
      fecha_vencimiento:any
      fecha_limite:any
    },
    cta_personal:{
      cbu:string, 
      numero:string, 
      sucursal:string
      banco:string
    },
    cheque: {
      imputacion:string
      documentacion_adjunta: {
        convenio:boolean
        acta:boolean
        otros:boolean
        cedula:boolean
        sentencia:boolean
      }, 
      banco:Desplegable
    }
    conceptos_pago: {
      concepto: Desplegable
      subconcepto: Desplegable
      monto1: string
      monto2: string
      monto3: string
      subtotal: string
      aportes: string
      iva: string
      total: string
      hasFactura:boolean
    }[]
    total_factura: {
      iva_total: string
      aportes_total: string
      total: string
    }
    total_otros: {
      total:string
    }    
    cuenta_personal:boolean,
    estado: {
      estado:string,
      fecha_hora:Date
    }[],
    estado_pago: {
      estado:string,
      fecha_hora:Date
    }[],
    estado_comprobante: {
      estado:string,
      fecha_hora:Date
    }[]
  }

  export interface PagoCasoData {
    conceptos_pago: {
      concepto: Desplegable
      subconcepto: Desplegable
      monto1: string
      subtotal: string
    }[]

  }

  export interface Caso {
    caratula:string
    carpeta: string
    expediente: string
    juzgado:string
    monto_total:string
    dates: {
      fecha_plazo:any
      fecha_vencimiento:any
      fecha_limite:any
    }
    proceso: Desplegable
    empresa: DesplegableEntidades
    destino_fondos: Desplegable
    forma_pago: Desplegable
    solicitante: string
    fecha_solicitud: string
    cta_judicial: {
      nro_cta: string
      cuit:string
      sucursal:string
      banco:string
      cbu:string
    },
    cheque: {
      documentacion_adjunta: {
        convenio:boolean
        acta:boolean
        otros:boolean
        cedula:boolean
        sentencia:boolean
      },
      banco: Desplegable
      imputacion:string
    },
    responsable: Responsable,
    presentador: Presentante,
    cargoEstudio:boolean
    beneficiarios: Beneficiarios[]
    conceptos_caso: Beneficiarios[]
    documentos_caso: Documentos[]
    nro_solicitud:string
    ultima_modificacion:string
    estado_global:string
  }

  export interface Select {
    id:string,
    name:string
  }
  
  export interface TheeyeCredential {
    credential:string, 
    email:string, 
    token:string,
      customer:string
  }
  
  export interface Cookie {
    email: string | null
    token: string | null
    credential: string | null
    customer:string | null
  }

  export interface Sujeto {
    identificacion:string
    nombre:string
    email:string
    cuit:string
    clasificacion:Desplegable
    tomo:string
    folio:string
    colegio:string
    matricula: string
  }

  export interface Responsable extends Sujeto {
    isResponsableSolicitante:boolean
  }

  export interface Presentante extends Sujeto {
    isPresentadorResponsable:boolean
  }