# Clear existing data
Employee.delete_all
Team.delete_all
Position.delete_all
Departement.delete_all
Allowance.delete_all
Deduction.delete_all
Payslip.delete_all

puts "🌱 Seeding..."

# Create Departments
Departement.create(name: 'TBD')
10.times { Departement.create(name: Faker::Company.department) }
puts "#{Departement.count} departments have been created."

# Create Teams
Team.create(name: 'TBD', description: 'Abc', departement_id: 1)
10.times do
  team = Team.create(
    name: Faker::Lorem.word,
    description: Faker::Lorem.sentences(number: 3),
    departement_id: rand(2..Departement.count + 1)
  )
  puts "Team '#{team.name}' created"
end
puts "#{Team.count} teams have been created."

# Create Positions
10.times { Position.create!(name: Faker::Company.profession) }
puts "#{Position.count} positions have been created."

# Create Employees
10.times do
  employee = Employee.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email, 
    manager: Faker::Boolean.boolean,
    team_id: rand(1..Team.count),
    position_id: rand(1..Position.count), 
    city: Faker::Address.city, 
    country: Faker::Address.country
  )
  puts "Employee '#{employee.fullname}' created"
end
puts "#{Employee.count} employees have been created."

# Create Allowances
10.times { Allowance.create(name: Faker::Lorem.word, description: Faker::Lorem.sentences(number: 1), amount: rand(1..500)) }
puts "#{Allowance.count} allowances have been created."

# Create Deductions
10.times { Deduction.create(name: Faker::Lorem.word, description: Faker::Lorem.sentences(number: 1), amount: rand(1..500)) }
puts "#{Deduction.count} deductions have been created."

puts "✅ Done seeding!"
