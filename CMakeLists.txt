cmake_minimum_required(VERSION 3.16)
project(algorithm C)

set(CMAKE_C_STANDARD 11)

file(GLOB files *.c */*.c)
foreach(file ${files})
    string(REGEX REPLACE ".+/(.+)\\..*" "\\1" exe ${file})
    add_executable (${exe} ${file})
    message (\ \ \ \ --\ src/${exe}.c\ will\ be\ compiled\ to\ bin/${exe})
endforeach()
