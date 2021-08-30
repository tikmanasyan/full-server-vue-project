<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Builder\Class_;

class Author extends Model
{
    /**
     * @var $fillable array
     */
    protected $fillable = ['author_name', 'created_at', 'updated_at'];
    use HasFactory;
    public function authors() {
        return $this->belongsToMany(Book::class,
            'books_stores',
            'author_id',
            'book_id')->withTimestamps();
    }
}
