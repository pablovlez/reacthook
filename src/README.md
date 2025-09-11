# CertificadosYAsistenciasInglesController

Controlador para la gestión de certificados y control de asistencias de cursos de inglés.

## Rutas Disponibles

### `/certificados_y_asistencias_ingles/`
- **Método:** GET
- **Acción:** `indexAction()`
- **Descripción:** Página principal del módulo
- **Permisos:** VIEW

### `/certificados_y_asistencias_ingles/generar_control_asistencias`
- **Método:** GET
- **Acción:** `generarControlAsistenciasAction()`
- **Descripción:** Genera el control de asistencias en formato XLS
- **Permisos:** IMPRIMIR
- **Parámetros requeridos:**
  - `pea_codigo`: Código del período académico
  - `pra_codigo`: Código del programa
  - `crg_codigo`: Código del cargo
  - `jor_codigo`: Código de la jornada
- **Parámetros opcionales:**
  - `mate_codigo`: Código de la materia
  - `mate_plan_codigo`: Código del plan de la materia
  - `gru_codigo`: Código del grupo

### `/certificados_y_asistencias_ingles/generar_certificado`
- **Método:** GET
- **Acción:** `generarCertificadoAction()`
- **Descripción:** Genera certificados de inglés para múltiples estudiantes
- **Permisos:** IMPRIMIR
- **Parámetros:** Mismos que generar_control_asistencias + `est_codigo` (opcional)

### `/certificados_y_asistencias_ingles/generar_certificado_estudiante`
- **Método:** GET
- **Acción:** `generarCertificadoEstudianteAction()`
- **Descripción:** Genera certificado de inglés para un estudiante específico
- **Parámetros requeridos:**
  - `est_codigo`: Código del estudiante
  - `pea_codigo`: Código del período académico
  - `pra_codigo`: Código del programa
  - `crg_codigo`: Código del cargo
  - `jor_codigo`: Código de la jornada
  - `mate_codigo`: Código de la materia
  - `mate_plan_codigo`: Código del plan de la materia
  - `gru_codigo`: Código del grupo

### `/certificados_y_asistencias_ingles/lista_estudiantes`
- **Método:** GET
- **Acción:** `listaEstudiantesAction()`
- **Descripción:** Lista estudiantes aptos para certificado de inglés
- **Permisos:** READ
- **Retorna:** JSON con lista de estudiantes

### `/certificados_y_asistencias_ingles/obtener_tipos_certificados`
- **Método:** GET
- **Acción:** `obtenerTiposCertificadosAction()`
- **Descripción:** Obtiene los tipos de certificados disponibles
- **Permisos:** READ
- **Retorna:** JSON con tipos de certificados

### `/certificados_y_asistencias_ingles/actualizar_tipo_certificado`
- **Método:** POST
- **Acción:** `actualizarTipoCertificadoAction()`
- **Descripción:** Actualiza la configuración de un tipo de certificado
- **Permisos:** PERMITIR_CONFIGURAR_CERTIFICADOS_INGLES
- **Parámetros:**
  - `tci_codigo`: Código del tipo de certificado
  - `tci_numero_licencia`: Número de licencia (opcional)
  - `plantilla`: Archivo de plantilla (opcional)

## Tipos de Certificados

El controlador maneja tres tipos de certificados según el código del programa:

1. **CA (Adults):** `certificado_ingles_adults`
2. **CT (Teens):** `certificado_ingles_teens`
3. **CK (Kids):** `certificado_ingles_kids`

## Funcionalidades Principales

- **Generación de control de asistencias:** Exporta datos de asistencia en formato XLS
- **Generación de certificados:** Crea certificados PDF personalizados por tipo de curso
- **Gestión de plantillas:** Permite actualizar las plantillas de certificados
- **Validación de estudiantes:** Verifica que los estudiantes cumplan requisitos para certificación
- **Autenticación:** Valida permisos y autenticidad de consultas

## Archivos de Plantilla

- **Control de asistencias:** `comfenalco/control_asistencias_ingles.jrxml`
- **Certificados:** `comfenalco/certificado_ingles_{tipo}.jrxml`

## Directorio de Plantillas

Las plantillas de certificados se almacenan en:
`{PATH_SERVER_REAL}/documentos/plantillas_certificados/ingles/`

## Autor

Jorge Osorio - DataSAE LTDA (2025)
