cpwords = {
    "Soil": "Pollution", 
    "Traffic": "Jam", 
    "Air": "Purifier", 
    "Play":"Ground"
}
print(cpwords.get("Air"))
print("Play" in cpwords.keys())
print("ground" not in cpwords.values())
cpwords.update({ "play": "Station" }) 
print(cpwords)
del cpwords["Jam"]