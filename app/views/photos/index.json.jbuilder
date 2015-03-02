json.array!(@photos) do |photo|
  json.extract! photo, :id, :name, :user, :order, :approved, :image
  json.url photo_url(photo, format: :json)
end
