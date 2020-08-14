# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Farm.destroy_all
Food.destroy_all
User.destroy_all

@admin = User.create(username: 'admin', email: 'admin@email.com', password: 'hello1hello')
puts "#{User.count} users created"

@carrot = Food.create(name: 'Carrot', user: @admin)
puts "#{Food.count} foods created"

@scotts = Farm.create(name: 'Scotts Fruit Farm', address: '123 New London Tpk', city: 'Glastonbury', state: 'CT', zipcode: '06033' , phone: '476-908-6753')
@surrey = Farm.create(name: 'Surrey Lane Vinyard Orchard Farm', address: '234 Surrey Lane', city: 'Southold', state: '', zipcode: '11960' , phone: '916-983-2536')
@eds = Farm.create(name: 'Uncle Eds Place', address: '456 Brick Kiln Rd', city: 'Bridghampton', state: 'NY', zipcode: '11963' , phone: '873-936-1900')
@duckwalk = Farm.create(name: 'Duckwalk Vinyards', address: '879 Sagaponack', city: 'Southampton', state: 'NY', zipcode: '11963' , phone: '910-927-9836')
puts "#{Farm.count} farms created"

@carrot.farms.push(@scotts, @eds)