<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    //
    public function index()
    {
        $projects = Project::paginate(3);
        return Inertia::render('Index', [
            'projects' => $projects,
        ]);
    }
}
