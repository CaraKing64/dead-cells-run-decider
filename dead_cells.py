# Copyright 2022 Isaac Carabott creator of "Dead Cells Run Decider"
# Disclaimer: This software is not associated with Motion Twin, Evil Empire or anything or anyone outside of Isaac Carabott
# Licence: This software is free to use, copy, modify, merge, publish, distribute and/or sell without any interference provided that 
# this text be included with it and it contains the same licence used here.

#ENTER IN YOUR INFORMATION HERE

runes = {
    "vine":True,
    "teleport":True,
    "spider":True,
    "ram":True,
    "homunculus":True,    
    }
dlc = {
    "rise_of_the_giant":True,
    "bad_seed":True,
    "fatal_falls":True,
    "queen_of_the_sea":True
}
visited_biomes = {
    "morass_of_the_banished":True,
    "undying_shores":True,
    "cavern":True,    
}

# code is below

import random

biome_map = {
    "prisoners_quarters": {
        "dilapidated_arboretum":{
            "runes":"teleport"
        }
    }

}

boss_cell = 5

class Biome():
    def __init__(self, name):
        self.name = name
        self.exits = []
    def exit(self, exit : Biome):
        print(f"Leaving {self.name} to go to {exit.name}")
