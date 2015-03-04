json.array!(@menuitems) do |menuitem|
  json.extract! menuitem, :id, :name, :description, :price, :order, :image
  json.url menuitem_url(menuitem, format: :json)
end
