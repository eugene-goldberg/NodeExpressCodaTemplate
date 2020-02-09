export class DevopsPipeline {

    constructor(
      public company_name = String,
      public program_name = String,
      public application_name = String,
      public application_component_name = String,
      public hosting_model = String,
      public environment: String,
      public pipeline_name,
      public pipeline_type: String) { }
  }
