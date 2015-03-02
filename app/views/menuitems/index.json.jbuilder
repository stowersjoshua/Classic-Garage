json.array!(@menuitems) do |menuitem|
  json.extract! menuitem, :id, :name, :description, :price, :order
  json.url menuitem_url(menuitem, format: :json)
end
