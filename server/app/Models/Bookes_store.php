<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookes_store extends Model
{
    use HasFactory;
    protected $table = 'books_stores';

    protected $fillable = ['author_id', 'book_id'];
}
