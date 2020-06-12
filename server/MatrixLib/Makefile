
GCC       = g++
FLAGS     = -Wall -Wextra -std=c++17 -stdlib=libc++
LIBS      = I ./eigen/
MAIN_RULE = libmatrix.a 

OBJ       = obj/
SRC       = src/
BIN		  = bin/
O_X       = .o
C_X       = .cpp
H_X       = .hpp

# take *.cpp in $(SRC), add parent folder $(OBJ) and replace .cpp to .o
OBJ_FILES = $(patsubst %$(C_X), $(OBJ)%$(O_X), $(notdir $(wildcard $(SRC)*$(C_X))))

# main rule, ld
$(MAIN_RULE) : $(OBJ_FILES)
	ar rcs bin/$@ obj/*

# for all the .cpp with a related .hpp
$(OBJ)%$(O_X) : $(SRC)%$(C_X) $(SRC)%.$(H_X)
	$(GCC) $(FLAGS) -c $< -o $@

# for all the .cpp without related .hpp
$(OBJ)%$(O_X) : $(SRC)%$(C_X)
	$(GCC) $(FLAGS) -c $< -o $@

clean :
	rm -rvf $(MAIN_RULE) $(OBJ)*$(O_X)
