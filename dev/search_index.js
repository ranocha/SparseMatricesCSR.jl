var documenterSearchIndex = {"docs":
[{"location":"#SparseMatricesCSR.jl","page":"Home","title":"SparseMatricesCSR.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [SparseMatricesCSR]","category":"page"},{"location":"#SparseMatricesCSR.SparseMatrixCSR","page":"Home","title":"SparseMatricesCSR.SparseMatrixCSR","text":"SparseMatrixCSR{Bi,Tv,Ti<:Integer} <: AbstractSparseMatrix{Tv,Ti}\n\nMatrix type for storing sparse matrices in the Compressed Sparse Row format with Bi-based indexing (typically 0 or 1). The standard way of constructing SparseMatrixCSR is through the sparsecsr function.\n\nProperties\n\nm::Int Number of columns\nn::Int Number of rows\nrowptr::Vector{Ti} Row i (1-based) in nzval vector at indices (1-based) (rowptr[i]+(1-Bi)):(rowptr[i+1]+(1-Bi)-1)\ncolval::Vector{Ti} Col indices (Bi-based) of stored values\nnzval::Vector{Tv}  Stored values, typically non zeros\n\nInner constructor\n\nSparseMatrixCSR{Bi}(\n  m::Integer,\n  n::Integer,\n  rowptr::Vector{Ti},\n  colval::Vector{Ti},\n  nzval::Vector{Tv}) where {Bi,Tv,Ti<:Integer}\n\n\n\n\n\n","category":"type"},{"location":"#SparseMatricesCSR.SparseMatrixCSR-Tuple{LinearAlgebra.Transpose{Tv,var\"#s14\"} where var\"#s14\"<:SparseArrays.SparseMatrixCSC where Tv}","page":"Home","title":"SparseMatricesCSR.SparseMatrixCSR","text":"SparseMatrixCSR(a::Transpose{Tv,<:SparseMatrixCSC} where Tv)\n\nBuild a 1-based SparseMatrixCSR from the lazy transpose of a SparseMatrixCSC. The resulting matrix takes ownership of the internal storage of input matrix. Modifying the values of one, will mutate also the other.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.SparseMatrixCSR-Union{Tuple{LinearAlgebra.Transpose{Tv,var\"#s12\"} where var\"#s12\"<:SparseArrays.SparseMatrixCSC where Tv}, Tuple{Bi}} where Bi","page":"Home","title":"SparseMatricesCSR.SparseMatrixCSR","text":"SparseMatrixCSR{Bi}(a::Transpose{Tv,<:SparseMatrixCSC} where Tv) where Bi\n\nBuild a Bi-based SparseMatrixCSR from the lazy transpose of a SparseMatrixCSC. The resulting matrix takes ownership of the internal storage of input matrix for any Bi and modifies the internal storage when Bi != 1. The input matrix will become unusable in the latter case.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.SymSparseMatrixCSR","page":"Home","title":"SparseMatricesCSR.SymSparseMatrixCSR","text":"struct SymSparseMatrixCSR{Bi,T,Ti<:Integer} <: AbstractSparseMatrix{T,Ti}\n  uppertrian :: SparseMatrixCSR{Bi,T,Ti}\nend\n\nMatrix type for storing symmetric sparse matrices in the Compressed Sparse Row format with Bi-based indexing (typically 0 or 1). Only the upper triangle is stored (including the non zero diagonal entries), which is represented by a SparseMatrixCSR. The standard way of constructing a SymSparseMatrixCSR is through the  symsparsecsr function.\n\n\n\n\n\n","category":"type"},{"location":"#Base.count-Tuple{Any,SparseMatrixCSR}","page":"Home","title":"Base.count","text":"count(pred, S::SparseMatrixCSR)\ncount(S::SparseMatrixCSR)\n\nCount the number of elements in nonzeros(S) for which predicate pred returns true. If  pred not given, it counts the number of true values.\n\n\n\n\n\n","category":"method"},{"location":"#Base.count-Tuple{Any,SymSparseMatrixCSR}","page":"Home","title":"Base.count","text":"count(pred, S::SymSparseMatrixCSR)\ncount(S::SymSparseMatrixCSR)\n\nCount the number of elements in nonzeros(S) for which predicate pred returns true.  If  pred not given, it counts the number of true values.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.findnz-Tuple{SymSparseMatrixCSR}","page":"Home","title":"SparseArrays.findnz","text":"findnz(S::SymSparseMatrixCSR)\n\nReturn a tuple (I, J, V) where I and J are the row and column 1-based indices  of the stored (\"structurally non-zero in diagonal + upper trianle\") values in sparse matrix A,  and V is a vector of the values. The returned vectors are newly allocated and are unrelated to the internal storage of matrix S.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.findnz-Union{Tuple{SparseMatrixCSR{Bi,Tv,Ti}}, Tuple{Ti}, Tuple{Tv}, Tuple{Bi}} where Ti where Tv where Bi","page":"Home","title":"SparseArrays.findnz","text":"findnz(S::SparseMatrixCSR{Bi,Tv,Ti})\n\nReturn a tuple (I, J, V) where I and J are the row and column 1-based indices of the stored (\"structurally non-zero\") values in sparse matrix A, and V is a vector of the values. The returned vectors are newly allocated and are unrelated to the internal storage of matrix S.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.issparse-Tuple{SparseMatrixCSR}","page":"Home","title":"SparseArrays.issparse","text":"issparse(S::SparseMatrixCSR)\n\nReturns true.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.issparse-Tuple{SymSparseMatrixCSR}","page":"Home","title":"SparseArrays.issparse","text":"issparse(S::SymSparseMatrixCSR)\n\nReturns true.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.nnz-Tuple{SparseMatrixCSR}","page":"Home","title":"SparseArrays.nnz","text":"nnz(S::SparseMatrixCSR)\n\nReturns the number of stored (filled) elements in a sparse array.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.nnz-Tuple{SymSparseMatrixCSR}","page":"Home","title":"SparseArrays.nnz","text":"nnz(S::SymSparseMatrixCSR)\n\nReturns the number of stored elements in a sparse array, which correspond to the nonzero entries in the upper triangle and diagonal.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.nonzeros-Tuple{SparseMatrixCSR}","page":"Home","title":"SparseArrays.nonzeros","text":"nonzeros(S::SparseMatrixCSR)\n\nReturn a vector (1-based) of the structural nonzero values in sparse array S. This includes zeros that are explicitly stored in the sparse array. The returned vector points directly to the internal nonzero storage of S, and any modifications to the returned vector will mutate S as well.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.nonzeros-Tuple{SymSparseMatrixCSR}","page":"Home","title":"SparseArrays.nonzeros","text":"nonzeros(S::SymSparseMatrixCSR)\n\nReturn a vector (1-based) of the structural nonzero values in sparse array S.  This includes zeros that are explicitly stored in the sparse array, which correspond to the nonzero entries in the upper triangle and diagonal. The returned vector points directly to the internal nonzero storage of S,  and any modifications to the returned vector will mutate S as well.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.nzrange-Tuple{SymSparseMatrixCSR,Integer}","page":"Home","title":"SparseArrays.nzrange","text":"nzrange(S::SymSparseMatrixCSR, row::Integer)\n\nReturn the range of indices to the structural nonzero values of a  sparse matrix row section being in the diagonal or upper triangle. The returned range of indices is always 1-based even for Bi != 1.\n\n\n\n\n\n","category":"method"},{"location":"#SparseArrays.nzrange-Union{Tuple{Bi}, Tuple{SparseMatrixCSR{Bi,Tv,Ti} where Ti where Tv,Integer}} where Bi","page":"Home","title":"SparseArrays.nzrange","text":"nzrange(S::SparseMatrixCSR{Bi}, row::Integer) where {Bi}\n\nReturn the range of indices to the structural nonzero values of a sparse matrix row. The returned range of indices is always 1-based even for Bi != 1.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.colvals-Tuple{SparseMatrixCSR}","page":"Home","title":"SparseMatricesCSR.colvals","text":"colvals(S::SparseMatrixCSR{Bi}) where {Bi}\n\nReturn a vector of the col indices of S. The stored values are indexes to arrays with Bi-based indexing, but the colvals(S) array itself is a standard 1-based Julia Vector. Any modifications to the returned vector will mutate S as well. Providing access to how the col indices are stored internally can be useful in conjunction with iterating over structural nonzero values. See also nonzeros and nzrange.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.colvals-Tuple{SymSparseMatrixCSR}","page":"Home","title":"SparseMatricesCSR.colvals","text":"colvals(S::SparseMatrixCSR)\n\nReturn a vector of the col indices of S. The stored values are indexes to arrays with Bi-based indexing, but the colvals(S) array itself is a standard 1-based Julia Vector. Any modifications to the returned vector will mutate S as well.  Providing access to how the col indices are stored internally  can be useful in conjunction with iterating over structural  nonzero values. See also nonzeros and nzrange.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.getBi-Union{Tuple{SparseMatrixCSR{Bi,Tv,Ti} where Ti where Tv}, Tuple{Bi}} where Bi","page":"Home","title":"SparseMatricesCSR.getBi","text":"getBi(S::SparseMatrixCSR{Bi}) where {Bi}\n\nReturn Bi.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.getBi-Union{Tuple{SymSparseMatrixCSR{Bi,T,Ti} where Ti<:Integer where T}, Tuple{Bi}} where Bi","page":"Home","title":"SparseMatricesCSR.getBi","text":"getBi(S::SymSparseMatrixCSR{Bi}) where {Bi}\n\nReturn Bi.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.getoffset-Union{Tuple{SparseMatrixCSR{Bi,Tv,Ti} where Ti where Tv}, Tuple{Bi}} where Bi","page":"Home","title":"SparseMatricesCSR.getoffset","text":"getoffset(S::SparseMatrixCSR{Bi}) where {Bi}\n\nReturn 1-Bi. Useful to convert from 1-based to Bi-based indexing (by subtracting the offset).\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.getoffset-Union{Tuple{SymSparseMatrixCSR{Bi,T,Ti} where Ti<:Integer where T}, Tuple{Bi}} where Bi","page":"Home","title":"SparseMatricesCSR.getoffset","text":"getoffset(S::SymSparseMatrixCSR{Bi}) where {Bi}\n\nReturn 1-Bi. Useful to convert from 1-based to Bi-based indexing (by subtracting the offset).\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.sparsecsr-Tuple{Any,Any,Any}","page":"Home","title":"SparseMatricesCSR.sparsecsr","text":"sparsecsr(args...)\nsparsecsr(::Val{Bi},args...) where Bi\n\nCreate  a SparseMatrixCSR with Bi-based indexing (1 by default) from the same args... as one constructs a SparseMatrixCSC with the sparse function.\n\n\n\n\n\n","category":"method"},{"location":"#SparseMatricesCSR.symsparsecsr-Union{Tuple{Bi}, Tuple{Val{Bi},Any,Any,Any,Vararg{Any,N} where N}} where Bi","page":"Home","title":"SparseMatricesCSR.symsparsecsr","text":"symsparsecsr(args...;symmetrize::Bool=false)\nsymsparsecsr(::Val{Bi},args...;symmetrize::Bool=false) where Bi\n\nCreate  a SymSparseMatrixCSR with Bi-based indexing (1 by default) from the same args... as one constructs a SparseMatrixCSC with the sparse function. If symmetrize == false (the default) the given arguments should only describe the upper triangle of the matrix (including non zero diagonal values). If symmetrize == true a non symmetric input is accepted and it will be symmetrized in-place (i.e., changing the input arguments).\n\n\n\n\n\n","category":"method"}]
}