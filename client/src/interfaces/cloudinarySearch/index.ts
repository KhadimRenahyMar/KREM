export interface CloudinarySearch {
  total_count: number,
  time: number,
  resources: Resource[],
  rate_limit_allowed: number,
  rate_limit_reset_at: Date,
  rate_limit_remaining: number
}

export interface Resource {
  asset_id: string,
  public_id: string,
  folder: string,
  filename: string,
  format: string,
  version: number,
  resource_type: string,
  type: string,
  created_at: string,
  uploaded_at: string,
  bytes: number,
  backup_bytes: number,
  width: number,
  height: number,
  aspect_ratio: number,
  pixels: number,
  pages: number,
  url: string,
  secure_url: string,
  status: string,
  access_mode: string,
  access_control: any,
  etag: string,
  created_by: Date,
  uploaded_by: Date
}